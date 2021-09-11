import ApiI from '../infrastructure/api/otherSite/i';
import ApiJ from '../infrastructure/api/otherSite/j';
import ApiY from '../infrastructure/api/otherSite/y';
import SheetPublishedHotelList from '../infrastructure/spreadsheet/publishedHotelList';
import { shrinkAddress } from '../lib/utils';

export default () => {
  const data = new SheetPublishedHotelList().fetchAll().map((hotel) => {
    const keyword = `${hotel.hotelName} ${shrinkAddress(
      hotel.address1 + hotel.address2
    )}`;

    if (hotel.jUrl === '') {
      const api = new ApiJ();
      hotel.jUrl = api.getUrl(keyword);
    }

    if (hotel.iUrl === '') {
      const api = new ApiI();
      hotel.iUrl = api.getUrl(keyword);
    }

    if (hotel.yUrl === '') {
      const api = new ApiY();
      hotel.yUrl = api.getUrl(keyword);
    }

    return hotel;
  });

  new SheetPublishedHotelList().replceAll(data);
};