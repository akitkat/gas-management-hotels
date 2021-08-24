type Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
type Sheet = GoogleAppsScript.Spreadsheet.Sheet;

export default class BaseSpreadSheet {
  protected headers: string[] = [];
  protected sheet: Sheet | null;
  protected sheetName: string = '';
  protected spreadSheet: Spreadsheet;

  constructor() {
    this.spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.spreadSheet.getSheetByName(this.sheetName);
    const firstRow = this.sheet
      ?.getRange(1, 1, 1, this.sheet.getLastColumn())
      .getValues();

    if (firstRow !== undefined && 0 < firstRow.length) {
      this.headers = firstRow[0];
    }
  }

  selectAll() {
    return this.sheet
      ?.getRange(2, 1, this.sheet.getLastRow(), this.sheet.getLastColumn())
      .getValues();
  }
}
