import BaseApi from '../baseApi';
import { chunk } from 'lodash';
import { parseRakutenTravelHotel } from './rakutenTravelHotelParser';

export default class RakutenTravelHotel extends BaseApi {
  limit = 15;

  constructor() {
    super('RAKUTEN_TRAVEL_OBJ');
  }

  fetchAllByHotelNoList(list) {
    let rows = [];
    chunk(list, this.limit).forEach((l) => {
      this.parameters.hotelNo = l.join(',');
      const res = this.fetch();
      rows = rows.concat(res.hotels);
    });

    return rows.map((e) => {
      return new parseRakutenTravelHotel(e);
    });
  }
}
