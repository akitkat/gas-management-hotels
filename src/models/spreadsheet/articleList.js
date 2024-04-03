export default class {
  constructor(no, url, flg, ids, title) {
    this.no = no;
    this.url = url;
    this.flg = flg;
    this.ids = ids;
    this.title = title;
  }

  toArray() {
    return [this.no, this.url, this.flg, this.ids, this.title];
  }
}
