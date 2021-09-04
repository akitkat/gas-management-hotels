import BaseSpreadSheet from './baseSpreadSheet';
import publishedHotelList from '../../models/spreadsheet/publishedHotelList';

export default class extends BaseSpreadSheet {
  constructor() {
    super('publishedHotelList');
  }

  fetchAll() {
    return super.selectAll().map((e) => {
      return new publishedHotelList(...e);
    });
  }
}
