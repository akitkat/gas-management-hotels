import { chunk_, shrinkAddress_, stripTags_ } from './utils'
import { sheetNameData, spreadSheetId } from './const'

import { stringify } from 'query-string'

export const fetchAllOtherIds = () => {
  const sql = SpreadSheetsSQL.open(spreadSheetId, sheetNameData)
  const hotels = sql
    .select(['hotelNo', 'hotelName', 'address1', 'address2', 'otherId'])
    .filter(`hotelNo > 0 AND otherId = NULL`)
    .result()

  if (hotels.length < 1) {
    return
  }

  const siteObj = JSON.parse(ScriptProperties.getProperty('OTHER_SITE_OBJ1'))

  hotels.forEach((hotel) => {
    try {
      const address = shrinkAddress_(hotel.address1 + hotel.address2)
      const parameters = siteObj.parameters
      parameters.MT = `${hotel.hotelName} ${address}`
      const fetchUrl = `${siteObj.url}?${stringify(parameters)}`
      const res = UrlFetchApp.fetch(fetchUrl).getContentText()
      const $ = Cheerio.load(res)
      const urls = $(siteObj.path)
        .map((i, v) => $(v).attr('href'))
        .get()

      if (urls.length < 1) {
        throw 'not found.'
      }

      const matches = urls
        .map((url) => {
          const match = url.match(/^.+\/yad(\d+)\/.*$/)
          console.log(match)
          return match ? match[1] : ''
        })
        .filter((e) => !!e)

      if (matches.length < 1) {
        throw 'not found.'
      }

      sql.updateRows(
        {
          [`otherId`]: matches[0],
        },
        `hotelNo = ${hotel.hotelNo}`
      )
    } catch (e) {
      console.error(e)
      sql.updateRows(
        {
          [`otherId`]: 'NULL',
        },
        `hotelNo = ${hotel.hotelNo}`
      )
    } finally {
      Utilities.sleep(2000)
    }
  })
}

export const fetchAllOtherDataByIds = () => {
  const sql = SpreadSheetsSQL.open(spreadSheetId, sheetNameData)
  const hotels = sql
    .select(['otherId', 'catchCopy', 'caption'])
    .filter(`otherId > 0 AND catchCopy = NULL AND caption = NULL`)
    .result()

  if (hotels.length < 1) {
    return
  }

  const siteObj = JSON.parse(ScriptProperties.getProperty('OTHER_SITE_OBJ2'))

  chunk_(hotels, 10).forEach((hotel) => {
    try {
      const query = hotel.map((e) => `${siteObj.key}=${e.otherId}`).join('&')
      const url = `${siteObj.url}?${stringify(siteObj.parameters)}&${query}`
      const res = UrlFetchApp.fetch(url).getContentText()
      const data = JSON.parse(res).yadList
      data.forEach((e) => {
        sql.updateRows(
          {
            catchCopy: stripTags_(e.hotelCatchCopy).trim(),
            caption: stripTags_(e.hotelCaption).trim(),
          },
          `otherId = ${e.hotelId}`
        )
      })
    } catch (e) {
      console.error(e)
    } finally {
      Utilities.sleep(2000)
    }
  })
}
