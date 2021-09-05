import ApiR from '../infrastructure/api/otherSite/r';
import Keywords from '../infrastructure/spreadsheet/keywords';
import SheetKeywords from '../models/spreadsheet/keywords';

export default () => {
  const data = new Keywords().fetchAll();
  const SheetKeywordsList = data
    .map((e) => {
      const api = new ApiR();
      const id = api.fetchId(e.keyword);
      return new SheetKeywords('=row()-1', id);
    })
    .filter((e) => e.keyword !== 'NULL');

  new Keywords().replceAll(SheetKeywordsList);

  fetchAllByHotelNoList();
};
