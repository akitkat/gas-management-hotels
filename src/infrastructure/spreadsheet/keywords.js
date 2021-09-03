import BaseSpreadSheet from './baseSpreadSheet';
import SheetKeywords from '../../models/spreadsheet/keywords';

export default class extends BaseSpreadSheet {
  constructor() {
    super('keywords');
  }

  fetchAll() {
    return super
      .selectAll()
      .filter((e) => !!e[0] && !!e[1])
      .map((e) => {
        return new SheetKeywords(...e);
      });
  }
}
