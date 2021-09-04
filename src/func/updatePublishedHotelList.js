import ApiContentfulPost from '../infrastructure/api/contentful/post';
import ApiRakutenTravelHotel from '../infrastructure/api/rakutenTravel/rakutenTravelHotel';
import SheetPublishedHotelList from '../infrastructure/spreadsheet/publishedHotelList';
import { convertToSheetPublishedHotelList } from '../services/rakutenTravel/rakutenTravelService';
import difference from 'lodash/difference';
import uniq from 'lodash/uniq';

export default () => {
  const posts = new ApiContentfulPost().fetchAll();
  const regex = /^<hotel-info-item no="(.[^"]+)".*><\/hotel-info-item>$/gm;

  let publishedHotelNoList = [];
  posts.forEach((e) => {
    const tags = (e.body.match(regex) ?? []).filter((e) => !!e).flat();
    if (!tags) {
      return;
    }

    const ids = tags.map((e) => e.match(/no="(\d+)"/)[1]);
    if (ids.length < 1) {
      return;
    }

    publishedHotelNoList = publishedHotelNoList.concat(ids);
  });

  publishedHotelNoList = publishedHotelNoList.map((e) => parseInt(e));
  publishedHotelNoList = uniq(publishedHotelNoList);

  const existHotelNoList = new SheetPublishedHotelList()
    .fetchAll()
    .map((e) => e.hotelNo);

  const targetHotelNoList = difference(publishedHotelNoList, existHotelNoList);
  if (targetHotelNoList.length < 1) {
    return;
  }

  const hotelList = new ApiRakutenTravelHotel().fetchAllByHotelNoList(
    targetHotelNoList
  );

  if (hotelList.length < 1) {
    return;
  }

  const sheetPublishedHotelList = hotelList.map((hotel) => {
    return convertToSheetPublishedHotelList(hotel);
  });

  new SheetPublishedHotelList().insertAll(sheetPublishedHotelList);
};
