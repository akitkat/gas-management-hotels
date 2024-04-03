export default () => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('ホテル一覧取得 by keyword', 'fetchAllByHotelKeywordList')
    .addItem('ホテル一覧取得 by hotelNo', 'fetchAllByHotelNoList')
    .addItem('他情報取得', 'fetchAllOtherData')
    .addItem('公開済みホテル一覧更新', 'updatePublishedHotelList')
    .addItem('記事作成', 'fetchHotelListByUrl')
    .addToUi();
};
