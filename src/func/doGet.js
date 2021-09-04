import SheetPublishedHotelList from '../infrastructure/spreadsheet/publishedHotelList';

export default (e) => {
  const existHotelNoList = new SheetPublishedHotelList().fetchAll();
  return ContentService.createTextOutput(
    JSON.stringify(existHotelNoList, null, 2)
  ).setMimeType(ContentService.MimeType.JSON);
};
