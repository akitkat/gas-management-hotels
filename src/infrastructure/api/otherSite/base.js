import BaseApi from '../baseApi';
import config from '../../../config/config';
import { stringify } from 'query-string';

export default class OtherSiteBaseApi extends BaseApi {
  constructor(propertyName) {
    super(propertyName);
  }

  fetchId(keyword) {
    try {
      const parameters = {...config.api.g.parameters}
      parameters.MT = keyword;
      parameters.Domain = this.config.domain;
      const url = `${config.api.g.baseUrl}?${stringify(parameters)}`;
      const res = UrlFetchApp.fetch(url).getContentText();
      const $ = Cheerio.load(res);
      const urls = $(config.api.g.selector)
        .map((i, v) => $(v).attr('href'))
        .get();

      if (urls.length < 1) {
        throw 'not found.';
      }

      const matches = urls
        .map((url) => {
          const match = url.match(new RegExp(this.config.pattern));
          return match ? match[1] : '';
        })
        .filter((e) => !!e);

      if (matches.length < 1) {
        throw 'not found.';
      }

      return matches[0];
    } catch (e) {
      console.error(e);
      return 'NULL';
    } finally {
      Utilities.sleep(2000);
    }
  }

  getUrl() {
    const id = this.fetch();
    return this.config.pageUrl.replace('{__replace__}', id);
  }
}
