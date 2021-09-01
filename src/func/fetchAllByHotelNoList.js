import ApiRakutenTravel from '../infrastructure/api/rakuten-travel/rakutenTravelHotel';
import KeywordsSpreadSheet from '../infrastructure/spreadsheet/keywords';
import SheetFetchedHotelData from '../infrastructure/spreadsheet/fetchedHotelData';
import { convertToSheetFetchedHotelData } from '../services/rakuten-travel/rakutenTravelService';

export default () => {
  const data = new KeywordsSpreadSheet().selectAll();
  const hotelNoList = data.map((e) => e.keyword);
  const hotelList = new ApiRakutenTravel().fetchAllByHotelNoList(hotelNoList);
  const sheetFetchedHotelDataList = hotelList.map((hotel) => {
    return convertToSheetFetchedHotelData(hotel);
  });
  new SheetFetchedHotelData().replceAll(sheetFetchedHotelDataList);
};
