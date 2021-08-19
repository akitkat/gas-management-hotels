export const onOpen = (e) => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('ホテル一覧取得 by hotelNo', 'fetchAllByHotelNos')
    .addItem('他ID取得', 'fetchAllOtherIds')
    .addItem('他情報取得', 'fetchAllOtherDataByIds')
    .addToUi()
}
