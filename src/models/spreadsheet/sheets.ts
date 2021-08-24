import { sheetKeywordsInterface } from './sheetsInterface';

export class sheetKeywords implements sheetKeywordsInterface {
  constructor(public no: number, public keyword: string) {}

  getNo(): number {
    return this.no;
  }

  getkeyword(): string {
    return this.keyword;
  }
}
