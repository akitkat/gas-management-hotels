export default class {
  constructor(
    hotelNo,
    hotelName,
    price,
    tel,
    address,
    access,
    image,
    rUrl,
    jUrl,
    iUrl,
    yUrl
  ) {
    this.hotelNo = hotelNo;
    this.hotelName = hotelName;
    this.price = String(price);
    this.tel = String(tel);
    this.address = address;
    this.access = access;
    this.image = image;
    this.rUrl = rUrl;
    this.jUrl = jUrl;
    this.iUrl = iUrl;
    this.yUrl = yUrl;
  }

  toArray() {
    return [
      this.hotelNo,
      this.hotelName,
      this.price,
      this.tel,
      this.address,
      this.access,
      this.image,
      this.rUrl,
      this.jUrl,
      this.iUrl,
      this.yUrl,
    ];
  }
}
