export const shrinkAddress = (address) => {
  // nullは空文字で返却
  if (!address) return '';

  // 番地っぽい文字列を抽出する正規表現
  let pattern =
    /([0-9０-９]+|[一二三四五六七八九十百千万]+)*(([0-9０-９]+|[一二三四五六七八九十百千万]+)|(丁目|丁|番地|番|号|-|‐|ー|−|の|東|西|南|北){1,2})*(([0-9０-９]+|[一二三四五六七八九十百千万]}+)|(丁目|丁|番地|番|号){1,2})/;
  let result = address.match(pattern);

  // マッチしたら番地よりも前の文字列を返却
  if (!!result) {
    return address.substring(0, result['index']);
  } else {
    return address;
  }
};

/**
 * 文字列からHTMLタグを取り除いて返却する.
 */
export const stripTags = (str) => {
  return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
};
