import BaseApi from '../baseApi';
import MediaContents from '../../../models/media/contents';

export default class extends BaseApi {
  constructor() {
    super('media');
  }

  fetchHotelListByUrl(url) {
    const host = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    const site = this.config.sites?.[host];
    if (!site) {
      return false;
    }

    const res = UrlFetchApp.fetch(url).getContentText();
    const $ = Cheerio.load(res);

    if (site.type == 'hotelNo') {
      const hotelList = $(site.selector)
        .map((i, v) => $(v).attr('href'))
        .get()
        .filter((url) => url.includes('rakuten'))
        .map((url) => url.match(new RegExp(site.match))[1]);
        return new MediaContents($('title').text(), 'hotelNo', hotelList);
    }
  }
}
