import BaseApi from '../baseApi';
import MediaContents from '../../../models/media/contents';

export default class extends BaseApi {
  constructor() {
    super('media');
  }

  $ = ''
  site = {}

  fetchHotelListByUrl(url) {
    const host = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    this.site = this.config.sites?.[host];
    if (!this.site) {
      return false;
    }

    let content = UrlFetchApp.fetch(url).getContentText();
    this.$ = Cheerio.load(content);

    let hotelList = []
    if (this.site.type == 'hotelNo') {
      hotelList = this.seekHotelNoList();

      let nextUrl = this.$('link[rel="next"]').attr('href')
      while (nextUrl !== undefined) {
        content = UrlFetchApp.fetch(nextUrl).getContentText()
        this.$ = Cheerio.load(content);
        hotelList = [...hotelList, ...this.seekHotelNoList()]
        nextUrl = this.$('link[rel="next"]').attr('href')
        Utilities.sleep(3000);
      }
      return new MediaContents(`${this.$('title').text()} ${hotelList.length}`, 'hotelNo', hotelList);
    }
  }

  seekHotelNoList() {
    return this.$(this.site.selector)
      .map((i, v) => this.$(v).attr('href'))
      .get()
      .filter((url) => url.includes(this.site.filter))
      .map((url) => url.match(new RegExp(this.site.match))?.[1])
      .filter((e) => !!e);
  }
}
