import BaseSpreadSheet from './baseSpreadSheet';
import { SheetKeywords } from '../../models/spreadsheet/sheets';

export default class SheetKeywordsSpread extends BaseSpreadSheet {
  constructor() {
    super('keywords');
  }
  fetchAll() {
    const res = super.selectAll();
    if (res === undefined) {
      return null;
    }

    return res.map((e) => {
      return new SheetKeywords(e[0], e[1]);
    });
  }
}
