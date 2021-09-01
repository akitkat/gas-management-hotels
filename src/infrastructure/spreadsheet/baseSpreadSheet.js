import { SheetKeywords } from '../../models/spreadsheet/sheets';

export default class BaseSpreadSheet {
  sheet;
  sheetName;
  spreadSheet;

  constructor(sheetName) {
    this.sheetName = sheetName;
    this.spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.spreadSheet.getSheetByName(this.sheetName);
  }

  selectAll() {
    const res = this.sheet
      .getRange(2, 1, this.sheet.getLastRow(), this.sheet.getLastColumn())
      .getValues();

    return res
      .filter((e) => !!e[0] && !!e[1])
      .map((e) => {
        return new SheetKeywords(...e);
      });
  }

  replceAll(data) {
    this.clearExceptHeader();

    const rows = data.map((e) => {
      return e.toArray();
    });

    this.sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
  }

  clearExceptHeader() {
    this.sheet
      .getRange(2, 1, this.sheet.getLastRow(), this.sheet.getLastColumn())
      .clear();
  }
}
