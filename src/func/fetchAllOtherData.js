import { shrinkAddress, stripTags } from '../lib/utils';

import ApiJ from '../infrastructure/api/otherSite/j';
import SheetFetchedHotelData from '../infrastructure/spreadsheet/fetchedHotelData';

export default () => {
  const data = new SheetFetchedHotelData().fetchAll().map((hotel) => {
    const keyword = `${hotel.hotelName} ${shrinkAddress(
      hotel.address1 + hotel.address2
    )}`;

    const j = new ApiJ();
    const otherId = j.fetchId(keyword);
    if (otherId !== 'NULL') {
      const res = j.fetch(otherId);
      hotel.otherId = otherId;
      hotel.catchCopy = stripTags(res.catchCopy).trim();
      hotel.caption = stripTags(res.caption).trim();
    }

    return hotel;
  });

  new SheetFetchedHotelData().replaceAll(data);
};
