export default () => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('ホテル一覧取得 by hotelNo', 'fetchAllByHotelNoList')
    .addItem('他情報取得', 'fetchAllOtherData')
    .addToUi();
};
