type SheetsOnOpen = GoogleAppsScript.Events.SheetsOnOpen;

export default (e: SheetsOnOpen): void => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('ホテル一覧取得 by hotelNo', 'fetchAllByHotelNos')
    .addItem('他ID取得', 'fetchAllOtherIds')
    .addItem('他情報取得', 'fetchAllOtherDataByIds')
    .addItem('掲載済みホテル一覧取得', 'fetchAllPublishedHotels')
    .addToUi();
};
