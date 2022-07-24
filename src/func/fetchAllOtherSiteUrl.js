import ApiI from '../infrastructure/api/otherSite/i';
import ApiJ from '../infrastructure/api/otherSite/j';
import ApiY from '../infrastructure/api/otherSite/y';
import SheetPublishedHotelList from '../infrastructure/spreadsheet/publishedHotelList';
import { shrinkAddress } from '../lib/utils';

export default () => {
  let i = 0;
  const data = new SheetPublishedHotelList().fetchAll().map((hotel) => {
    if (15 <= i) {
      return hotel;
    }

    const keyword = `${hotel.hotelName} ${shrinkAddress(
      hotel.address1 + hotel.address2
    )}`;

    if (hotel.jUrl === '') {
      const api = new ApiJ();
      hotel.jUrl = api.getUrl(keyword);
      i++;
    }

    if (hotel.iUrl === '') {
      const api = new ApiI();
      hotel.iUrl = api.getUrl(keyword);
      i++;
    }

    if (hotel.yUrl === '') {
      const api = new ApiY();
      hotel.yUrl = api.getUrl(keyword);
      i++;
    }

    return hotel;
  });

  new SheetPublishedHotelList().replaceAll(data);
};
