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
}
