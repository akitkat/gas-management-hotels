import { stringify } from 'query-string';

export default class BaseApi {
  baseUrl = '';
  parameters = {};
  propertyName;

  constructor(propertyName) {
    this.propertyName = propertyName;
    const json = PropertiesService.getScriptProperties().getProperty(
      this.propertyName
    );
    if (json !== null) {
      const property = JSON.parse(json);
      this.baseUrl = property.baseUrl;
      this.parameters = property.baseParameters;
    }
  }

  fetch() {
    const url = `${this.baseUrl}?${stringify(this.parameters)}`;
    console.log("🚀 ~ file: baseApi.js ~ line 22 ~ BaseApi ~ fetch ~ url", url)
    const res = UrlFetchApp.fetch(url).getContentText();
    return JSON.parse(res);
  }
}
