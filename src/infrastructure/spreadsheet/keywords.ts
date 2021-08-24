import BaseSpreadSheet from './baseSpreadSheet';
import { SheetKeywords } from '../../models/spreadsheet/sheets';
import { SheetKeywordsInterface } from '../../models/spreadsheet/sheetsInterface';

export default class KeywordsSpreadSheet extends BaseSpreadSheet {
  protected sheetName: string = 'keywords';

  fetchAll(): SheetKeywordsInterface[] | null {
    const res = super.selectAll();
    if (res === undefined) {
      return null;
    }

    return res.map((e: any[]): SheetKeywordsInterface => {
      return new SheetKeywords(e[0], e[1]);
    });
  }
}
