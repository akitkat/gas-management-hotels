import ApiRakutenTravelHotel from '../infrastructure/api/rakutenTravel/rakutenTravelHotel';
import SheetPublishedHotelList from '../infrastructure/spreadsheet/publishedHotelList';
import { convertToSheetPublishedHotelList } from '../services/rakutenTravel/rakutenTravelService';

export default () => {
  const limit = 10;
  
  const publishedHotelList = new SheetPublishedHotelList().fetchAll();
  const publishedHotelNoList = publishedHotelList
    .filter((hotel) => hotel.userReview === '')
    .map((hotel) => hotel.hotelNo)
    .slice(0, 15 * limit);

    const hotelList = [];
    new ApiRakutenTravelHotel()
      .fetchAllByHotelNoList(publishedHotelNoList)
      .forEach((hotel) => {
        return hotelList[hotel.basicInfo.hotelNo] = convertToSheetPublishedHotelList(hotel);
      });

    const sheetPublishedHotelList = publishedHotelList
      .map((hotel) => {
        if (! hotelList[hotel.hotelNo]) {
          return hotel;
        }

        hotel.userReview = hotelList[hotel.hotelNo].userReview === '' ? '-' : hotelList[hotel.hotelNo].userReview;
        return hotel;
      });

  new SheetPublishedHotelList().replaceAll(sheetPublishedHotelList);
};
