import ApiRakutenTravel from '../infrastructure/api/rakutenTravel/rakutenTravelHotel';
import FetchedHotelData from '../infrastructure/spreadsheet/fetchedHotelData';
import Keywords from '../infrastructure/spreadsheet/keywords';
import { convertToSheetFetchedHotelData } from '../services/rakutenTravel/rakutenTravelService';

export default () => {
  const data = new Keywords().fetchAll();
  const hotelNoList = data.map((e) => e.keyword);
  const hotelList = new ApiRakutenTravel().fetchAllByHotelNoList(hotelNoList);
  const sheetFetchedHotelDataList = hotelList.map((hotel) => {
    return convertToSheetFetchedHotelData(hotel);
  });
  new FetchedHotelData().replaceAll(sheetFetchedHotelDataList);
};
