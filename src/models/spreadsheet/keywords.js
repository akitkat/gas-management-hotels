export default class SheetKeywords {
  constructor(no, keyword) {
    this.no = no;
    this.keyword = keyword;
  }

  toArray() {
    return [this.no, this.keyword];
  }
}
