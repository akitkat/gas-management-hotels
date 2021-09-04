import OtherSiteBaseApi from './base';

export default class OtherSiteJ extends OtherSiteBaseApi {
  constructor() {
    super('j');
  }

  fetch(id) {
    this.config.parameters[this.config.key] = id;
    const res = super.fetch();
    return {
      catchCopy: res.yadList[0]?.hotelCatchCopy ? res.yadList[0].hotelCatchCopy : '',
      caption: res.yadList[0]?.hotelCaption ? res.yadList[0].hotelCaption : '',
    };
  }
}
