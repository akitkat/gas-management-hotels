const id = SpreadsheetApp.getActiveSpreadsheet().getId()
const applicationId = ScriptProperties.getProperty('APPLICATION_ID');
const affiliateId = ScriptProperties.getProperty('AFFILIATE_ID');
const baseApiUrl = ScriptProperties.getProperty('BASE_API_URL');

const onOpen = e => {
  SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem('スクレイピング実行 by キーワード', 'main')
    .addItem('スクレイピング実行 by hotelId', 'getByHotelIds')
    .addToUi()
}

const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data')
const targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('対象データ')

const necessaryProperties = ['hotelName', 'address1', 'address2', 'areaName', 'access', 'telephoneNo', 'checkinTime', 'checkoutTime', 'hotelMinCharge', 'hotelSpecial', 'roomFacilities', 'parkingInformation', 'hotelImageUrl', 'hotelInformationUrl']

function main() {
  try {
    const keywords = SpreadSheetsSQL.open(id, 'keywords').select(['No.', 'keyword']).result()
    for (let keyword of keywords) {
      let total = 0
      let currentPage = 1
      let hotels = []
      do {
        let data = fetchHotelData(keyword['keyword'], currentPage)
        total = data.total
        hotels = data.hotels
        insertHotels(keyword['keyword'], hotels)
        currentPage++
        Utilities.sleep(1000)
      } while (currentPage <= total)
    }
  } catch (e) {
    console.error(e.message)
  }
}

function fetchHotelData(keyword, page) {
  const url = `${baseApiUrl}?format=json&keyword=${keyword}&page=${page}&applicationId=${applicationId}&responseType=large&affiliateId=${affiliateId}`

  const res = UrlFetchApp.fetch(url)
  const data = JSON.parse(res)
  const pageInfo = data.pagingInfo
  const hotelData = data.hotels
  const sanitizedData = hotelData.reduce(function (carry, element) {
    const schema = {
      'hotelBasicInfo': {},
      'hotelDetailInfo': {},
      'roomFacilities': {}
    }
    const hotelDetails = element['hotel'].reduce(function (base, detail) {
      if (detail.hasOwnProperty('hotelBasicInfo')) {
        base = { ...base, hotelBasicInfo: detail['hotelBasicInfo'] }
      }
      if (detail.hasOwnProperty('hotelDetailInfo')) {
        base = { ...base, hotelDetailInfo: detail['hotelDetailInfo'] }
      }
      if (detail.hasOwnProperty('hotelFacilitiesInfo')) {
        let roomFacilities = detail['hotelFacilitiesInfo']['roomFacilities'].map(info => info.item)
        roomFacilities = roomFacilities.length > 0 ? roomFacilities.join('/') : '記載なし'
        base = { ...base, roomFacilities }
      }
      return base
    }, schema)
    let picked = (({ hotelName, hotelSpecial, hotelMinCharge, address1, address2, telephoneNo, access, parkingInformation, nearestStation, hotelImageUrl, hotelInformationUrl }) => ({ hotelName, hotelSpecial, hotelMinCharge, address1, address2, telephoneNo, access, parkingInformation, nearestStation, hotelImageUrl, hotelInformationUrl }))(hotelDetails['hotelBasicInfo'])
    picked = { ...picked, areaName: hotelDetails['hotelDetailInfo']['areaName'], checkinTime: hotelDetails['hotelDetailInfo']['checkinTime'], checkoutTime: hotelDetails['hotelDetailInfo']['checkoutTime'] }
    picked = { ...picked, roomFacilities: hotelDetails['roomFacilities'] }
    carry.push(picked)
    return carry
  }, [])
  const result = {
    total: pageInfo['pageCount'],
    hotels: sanitizedData
  }
  return result
}

function insertHotels(keyword, hotels) {
  for (let hotel of hotels) {
    let lastRow = sheet.getLastRow()
    let values = [keyword]
    necessaryProperties.map((property) => {
      values.push(hotel[property])
    })
    let startRow = lastRow + 1
    let startCol = 1
    let numRows = 1
    let numCols = values.length
    let range = sheet.getRange(startRow, startCol, numRows, numCols)
    range.setValues([values])
  }
}

function getByHotelIds() {
  try {
    const keywords = SpreadSheetsSQL.open(id, 'keywords').select(['No.', 'keyword']).result()
    const hotelIds = keywords.map(e => e.keyword).filter(e => e).join`,`
    const url = `${baseApiUrl}?format=json&hotelNo=${hotelIds}&applicationId=${applicationId}&responseType=large&affiliateId=${affiliateId}`
    const res = UrlFetchApp.fetch(url)
    const data = JSON.parse(res)
    const hotelData = data.hotels
    const sanitizedData = hotelData.reduce(function (carry, element) {
      const schema = {
        'hotelBasicInfo': {},
        'hotelDetailInfo': {},
        'roomFacilities': {}
      }
      const hotelDetails = element['hotel'].reduce(function (base, detail) {
        if (detail.hasOwnProperty('hotelBasicInfo')) {
          base = { ...base, hotelBasicInfo: detail['hotelBasicInfo'] }
        }
        if (detail.hasOwnProperty('hotelDetailInfo')) {
          base = { ...base, hotelDetailInfo: detail['hotelDetailInfo'] }
        }
        if (detail.hasOwnProperty('hotelFacilitiesInfo')) {
          let roomFacilities = detail['hotelFacilitiesInfo']['roomFacilities'].map(info => info.item)
          roomFacilities = roomFacilities.length > 0 ? roomFacilities.join('/') : '記載なし'
          base = { ...base, roomFacilities }
        }
        return base
      }, schema)
      let picked = (({ hotelName, hotelSpecial, hotelMinCharge, address1, address2, telephoneNo, access, parkingInformation, nearestStation, hotelImageUrl, hotelInformationUrl }) => ({ hotelName, hotelSpecial, hotelMinCharge, address1, address2, telephoneNo, access, parkingInformation, nearestStation, hotelImageUrl, hotelInformationUrl }))(hotelDetails['hotelBasicInfo'])
      picked = { ...picked, areaName: hotelDetails['hotelDetailInfo']['areaName'], checkinTime: hotelDetails['hotelDetailInfo']['checkinTime'], checkoutTime: hotelDetails['hotelDetailInfo']['checkoutTime'] }
      picked = { ...picked, roomFacilities: hotelDetails['roomFacilities'] }
      carry.push(picked)
      return carry
    }, [])
    insertHotels('', sanitizedData)
  } catch (e) {
    console.error(e.message)
  }
}

