import BaseApi from '../baseApi';
import Post from '../../../models/contentful/post';

export default class extends BaseApi {
  constructor() {
    super('contentful');
  }

  fetchAll() {
    this.config.baseUrl = `${this.config.baseUrl}/spaces/${this.config.spaceId}/environments/master/entries`;
    this.config.parameters.content_type = 'post';
    this.config.parameters.limit = 1000;
    this.config.parameters.select = 'fields.body';

    const res = this.fetch();
    return res.items
      .filter((e) => e?.fields?.body)
      .map((e) => {
        return new Post(e.fields.body);
      });
  }

  add(title, content) {
    const url = `${this.config.baseUrl}/spaces/${this.config.spaceId}/environments/master/entries`;
    var options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({
        fields: {
          title: {
            ja: title,
          },
          body: {
            ja: content,
          },
        },
      }),
      headers: {
        'Authorization': `Bearer ${this.config.parameters.access_token}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Content-Type': 'post',
      },
    };

    const res = UrlFetchApp.fetch(url, options);

    return JSON.parse(res);
  }
}
