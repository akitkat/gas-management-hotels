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
    if (this.sheet.getLastRow() === 1) {
      return [];
    }

    return this.sheet
      .getRange(2, 1, this.sheet.getLastRow() - 1, this.sheet.getLastColumn())
      .getValues();
  }

  replceAll(data) {
    this.clearExceptHeader();

    const rows = data.map((e) => {
      return e.toArray();
    });

    this.sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
  }

  insertAll(data) {
    const rows = data.map((e) => {
      return e.toArray();
    });

    this.sheet
      .getRange(
        this.sheet.getLastRow() + 1,
        1,
        rows.length,
        this.sheet.getLastColumn()
      )
      .setValues(rows);
  }

  clearExceptHeader() {
    this.sheet
      .getRange(2, 1, this.sheet.getLastRow(), this.sheet.getLastColumn())
      .clear();
  }
}
