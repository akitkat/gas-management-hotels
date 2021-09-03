import config from '../../config/config';
import { stringify } from 'query-string';

export default class BaseApi {
  config = {};

  constructor(propertyName) {
    this.config = config['api'][propertyName];
  }

  fetch() {
    const url = `${this.config.baseUrl}?${stringify(this.config.parameters)}`;
    console.log('🚀 ~ file: baseApi.js ~ line 22 ~ BaseApi ~ fetch ~ url', url);
    const res = UrlFetchApp.fetch(url).getContentText();
    return JSON.parse(res);
  }
}
