import ApiRakutenTravel from '../infrastructure/api/rakutenTravel/rakutenTravelHotel';
import KeywordsSpreadSheet from '../infrastructure/spreadsheet/keywords';
import SheetFetchedHotelData from '../infrastructure/spreadsheet/fetchedHotelData';
import { convertToSheetFetchedHotelData } from '../services/rakutenTravel/rakutenTravelService';

export default () => {
  const data = new KeywordsSpreadSheet().selectAll();
  const hotelNoList = data.map((e) => e.keyword);
  const hotelList = new ApiRakutenTravel().fetchAllByHotelNoList(hotelNoList);
  const sheetFetchedHotelDataList = hotelList.map((hotel) => {
    return convertToSheetFetchedHotelData(hotel);
  });
  new SheetFetchedHotelData().replceAll(sheetFetchedHotelDataList);
};
