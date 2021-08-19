export const sheetNameBathAbouts = 'bathAbouts'
export const sheetNameData = 'data2'
export const sheetNameHotelFacilities = 'hotelFacilities'
export const sheetNameRoomFacilities = 'roomFacilities'
export const spreadSheet = SpreadsheetApp.getActiveSpreadsheet()
export const spreadSheetId = spreadSheet.getId()
export const sheetBathAbouts = spreadSheet.getSheetByName(sheetNameBathAbouts)
export const sheetRoomFacilities = spreadSheet.getSheetByName(
  sheetNameRoomFacilities
)
export const sheetHotelFacilities = spreadSheet.getSheetByName(
  sheetNameHotelFacilities
)
export const sheetData = spreadSheet.getSheetByName(sheetNameData)

export const necessaryProperties = [
  'hotelNo',
  'hotelName',
  'hotelInformationUrl',
  'planListUrl',
  'dpPlanListUrl',
  'reviewUrl',
  'hotelSpecial',
  'hotelMinCharge',
  'latitude',
  'longitude',
  'address1',
  'address2',
  'telephoneNo',
  'access',
  'parkingInformation',
  'nearestStation',
  'hotelImageUrl',
  'hotelThumbnailUrl',
  'roomImageUrl',
  'roomThumbnailUrl',
  'reviewCount',
  'reviewAverage',
  'userReview',
  'serviceAverage',
  'locationAverage',
  'roomAverage',
  'equipmentAverage',
  'bathAverage',
  'mealAverage',
  'hotelClassCode',
  'checkinTime',
  'checkoutTime',
  'lastCheckinTime',
  'hotelRoomNum',
]

export const necessaryRoomFacilities = [
  // '加湿器(貸出)',
  '加湿器',
  // '電子レンジ（一部・要予約）',
  'ベビーベッド',
  'ミニキッチン（一部・要予約）',
  // '加湿器(一部)',
  'エクステンションベッド',
]

export const necessaryHotelFacilities = [
  '大浴場',
  'マッサージサービス',
  '露天風呂',
  '送迎バス',
  'サウナ',
  'ラウンジ',
  '喫茶',
  'カラオケルーム',
  // 'ルームサービス',
  'ティーラウンジ',
  '卓球',
  'エステサロン',
  'ゲームコーナー',
  '貸自転車',
  'バー',
  'バーラウンジ',
  'プール(夏期のみ)',
  // '湯上がりサロン',
  // '夜食コーナー',
  // 'コネクティングルーム（一部・要予約）',
  '屋外プール',
  // 'テニスコート',
  // 'コーヒーショップ',
  'プール(通年)',
  'ペット同宿可',
  'バーベキューガーデン',
  // '居酒屋コーナー',
  // '麻雀室',
  // 'セルフコインランドリーコーナー(無料)',
  'カラオケサロン',
  // 'ナイトクラブ',
  'コンビニエンスストア',
  'スポーツジム',
  'フィットネスクラブ',
  // 'コーヒーハウス',
  // 'ベーカーショップ',
  'スカイラウンジ',
  '児童遊園施設',
  // 'ミニキッチン',
  'ドラッグストア',
  '釣り堀',
  'キッズルーム',
]

export const necessaryBathAbouts = [
  '温泉',
  '家族風呂',
  '天然温泉',
  '岩盤浴',
  // '人工温泉',
  // '水風呂',
  // 'ジャグジー',
]

export const headers = [
  ...necessaryProperties,
  ...necessaryRoomFacilities,
  ...necessaryHotelFacilities,
  ...necessaryBathAbouts,
  'otherId',
  'catchCopy',
  'caption',
]
