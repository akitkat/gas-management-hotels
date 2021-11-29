import ApiContentfulPost from '../infrastructure/api/contentful/post';
import ApiMedia from '../infrastructure/api/media/media';
import Keywords from '../infrastructure/spreadsheet/keywords';
import SheetArticleList from '../infrastructure/spreadsheet/articleList';
import SheetKeywords from '../models/spreadsheet/keywords';

export default () => {
  let isFetched = false;
  let type = '';
  let title = '';
  const data = new SheetArticleList().fetchAll().map((site) => {
    if (isFetched) {
      return site;
    }

    if (0 < site.flg) {
      return site;
    }

    const contents = new ApiMedia().fetchHotelListByUrl(site.url);
    if (contents.list.length < 1) {
      site.flg = 9;
      return site;
    }

    type = contents.type;
    title = contents.title;

    const keywords = contents.list.map((hotel) => {
      return new SheetKeywords('=row()-1', hotel);
    });
    new Keywords().replceAll(keywords);
    isFetched = true;

    site.flg = 1;
    return site;
  });

  new SheetArticleList().replceAll(data);

  if (isFetched) {
    if (type == 'hotelNo') {
      fetchAllByHotelNoList();
    } else {
      fetchAllByHotelKeywordList();
    }
    fetchAllOtherData();
  }

  const content = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('article')
    .getRange('E2')
    .getValue()
    .replaceAll("'", '"')
    .replaceAll("'", '"')
    .replaceAll("【】！", '')
    .replaceAll('。！', '。');

  const posts = new ApiContentfulPost().add(title, content);
};
