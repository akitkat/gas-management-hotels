import BaseSpreadSheet from './baseSpreadSheet';
import FetchedHotelData from '../../models/spreadsheet/fetchedHotelData'

export default class extends BaseSpreadSheet {
  constructor() {
    super('fetchedHotelData');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => {
        return new FetchedHotelData(...e);
      });
  }
}
