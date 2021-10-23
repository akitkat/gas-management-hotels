import ArticleList from '../../models/spreadsheet/articleList'
import BaseSpreadSheet from './baseSpreadSheet';

export default class extends BaseSpreadSheet {
  constructor() {
    super('articleList');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => {
        return new ArticleList(...e);
      });
  }
}
