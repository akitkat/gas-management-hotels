export default class {
  constructor(no, url, flg) {
    this.no = no;
    this.url = url;
    this.flg = flg;
  }

  toArray() {
    return [this.no, this.url, this.flg];
  }
}
