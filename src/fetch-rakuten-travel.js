import { chunk_, uniq_ } from './utils'
import {
  headers,
  necessaryBathAbouts,
  necessaryHotelFacilities,
  necessaryProperties,
  necessaryRoomFacilities,
  sheetBathAbouts,
  sheetData,
  sheetHotelFacilities,
  sheetRoomFacilities,
  spreadSheetId,
} from './const'

import { stringify } from 'query-string'

const baseApiUrl = ScriptProperties.getProperty('BASE_API_URL')

const fetchParameters = {
  format: 'json',
  responseType: 'large',
  formatVersion: 2,
  applicationId: ScriptProperties.getProperty('APPLICATION_ID'),
  affiliateId: ScriptProperties.getProperty('AFFILIATE_ID'),
}

/**
 * HotelNoでホテル情報を取得する.
 */
export const fetchAllByHotelNos = () => {
  const hotelNos = SpreadSheetsSQL.open(spreadSheetId, 'keywords')
    .select(['keyword'])
    .result()
    .map((e) => e.keyword)
    .filter((e) => !!e)
  let rows = []
  chunk_(hotelNos, 15).forEach((nos) => {
    fetchParameters.hotelNo = nos.join(',')
    const url = `${baseApiUrl}?${stringify(fetchParameters)}`
    const res = fetch_(url)
    res.forEach((hotel) => {
      const row = seek_(hotel)
      console.log(row)
      rows.push(row)
    })
  })

  rows.unshift(headers)
  bulkInsert_(rows)
}

/**
 * HotelNoでホテル設備と部屋設備を取得.
 */
export const fetchAllFacilitiesByHotelNos = () => {
  const hotelNos = SpreadSheetsSQL.open(spreadSheetId, 'keywords')
    .select(['keyword'])
    .result()
    .map((e) => e.keyword)
    .filter((e) => !!e)

  chunk_(hotelNos, 15).forEach((nos) => {
    fetchParameters.hotelNo = nos.join(',')
    const url = `${baseApiUrl}?${stringify(fetchParameters)}`
    const res = fetch_(url)

    res.forEach((hotel) => {
      const roomFacilities = seekRoomFacilities_(hotel)
      replaceIntoRoomFacilities_(roomFacilities)

      const hotelFacilities = seekHotelFacilities_(hotel)
      replaceIntoHotelFacilities_(hotelFacilities)

      const bathAbouts = seekBathAbouts_(hotel)
      replaceIntoBathAbouts_(bathAbouts)
    })
  })
}

const fetch_ = (url) => {
  const res = UrlFetchApp.fetch(url)
  const data = JSON.parse(res)
  return data.hotels.map((e) => parse_(e))
}

const parse_ = (hotel) => {
  return {
    ...hotel[0].hotelBasicInfo,
    ...hotel[1].hotelRatingInfo,
    ...hotel[2].hotelDetailInfo,
    ...hotel[3].hotelFacilitiesInfo,
    ...hotel[4].hotelPolicyInfo,
    ...hotel[5].hotelOtherInfo,
  }
}

const seek_ = (hotel) => {
  let res = []
  necessaryProperties.forEach((e) => {
    res.push(hotel[e])
  })

  // 部屋における対象の設備の存在有無を追加.
  const roomFacilities = seekRoomFacilities_(hotel)
  necessaryRoomFacilities.forEach((e) => {
    res.push(roomFacilities.includes(e))
  })

  // ホテルにおける対象の設備の存在有無を追加.
  const hotelFacilities = seekHotelFacilities_(hotel)
  necessaryHotelFacilities.forEach((e) => {
    res.push(hotelFacilities.includes(e))
  })

  // お風呂における対象の設備の存在有無を追加.
  const bathAbouts = seekBathAbouts_(hotel)
  necessaryBathAbouts.forEach((e) => {
    res.push(bathAbouts.includes(e))
  })

  // other site用
  res.push('')
  res.push('')
  res.push('')

  return res
}

const bulkInsert_ = (rows) => {
  sheetData.clear()
  sheetData.getRange(1, 1, rows.length, headers.length).setValues(rows)
}

const seekRoomFacilities_ = (data) => {
  return data.roomFacilities.map((e) => e.item)
}

const seekHotelFacilities_ = (data) => {
  return data.hotelFacilities.map((e) => e.item)
}

const seekBathAbouts_ = (data) => {
  return data.aboutBath.filter((e) => e?.bathType).map((e) => e.bathType)
}

const replaceIntoRoomFacilities_ = (data) => {
  const res = sheetRoomFacilities
    .getRange(2, 2, sheetRoomFacilities.getLastRow() - 1, 1)
    .getValues()
    .map((e) => e[0])
  const rows = uniq_([...res, ...data]).map((e) => ['=row()-1', e])
  sheetRoomFacilities.getRange(2, 1, rows.length, 2).setValues(rows)
}

/**
 * ホテル設備をシートに書き込む.
 * ※ホテル独自の値があるため出現回数が多いものだけ取り出したいためカウントしている.
 */
const replaceIntoHotelFacilities_ = (data) => {
  const sheet = sheetHotelFacilities
  const res = sheetHotelFacilities
    .getRange(2, 2, sheetHotelFacilities.getLastRow(), 2)
    .getValues()

  const tmp = {}
  res.forEach((e) => {
    tmp[e[0]] = e[1]
  })

  data.forEach((e) => {
    if (tmp[e] !== undefined) {
      tmp[e] = parseInt(tmp[e]) + 1
    } else {
      tmp[e] = 1
    }
  })

  let rows = []
  for (let key in tmp) {
    rows.push(['=row()-1', key, tmp[key]])
  }

  sheetHotelFacilities.getRange(2, 1, rows.length, 3).setValues(rows)
}

const replaceIntoBathAbouts_ = (data) => {
  let res = []
  if (1 < sheetBathAbouts.getLastRow()) {
    res = sheetBathAbouts
      .getRange(2, 2, sheetBathAbouts.getLastRow(), 1)
      .getValues()
      .map((e) => e[0])
  }
  const rows = uniq_([...res, ...data]).map((e) => ['=row()-1', e])
  sheetBathAbouts.getRange(2, 1, rows.length, 2).setValues(rows)
}
