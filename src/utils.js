/**
 * 配列をユニークにして返却する.
 */
export const uniq_ = (array) => {
  return [...new Set(array)]
}

/**
 * 配列を指定のサイズにchunkして返却する.
 */
export const chunk_ = (arr, size) => {
  return arr.reduce(
    (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
    []
  )
}

/**
 * 配列の差分を計算して返却する.
 */
export const diff_ = (a, b) => {
  return a.filter((e) => b.indexOf(e) == -1)
}

/**
 * 住所文字列から番地以降を削除して返却する.
 */
export const shrinkAddress_ = (address) => {
  // nullは空文字で返却
  if (!address) return ''

  // 番地っぽい文字列を抽出する正規表現
  let pattern =
    /([0-9０-９]+|[一二三四五六七八九十百千万]+)*(([0-9０-９]+|[一二三四五六七八九十百千万]+)|(丁目|丁|番地|番|号|-|‐|ー|−|の|東|西|南|北){1,2})*(([0-9０-９]+|[一二三四五六七八九十百千万]}+)|(丁目|丁|番地|番|号){1,2})/
  let result = address.match(pattern)

  // マッチしたら番地よりも前の文字列を返却
  if (!!result) {
    return address.substring(0, result['index'])
  } else {
    return address
  }
}

/**
 * 文字列からHTMLタグを取り除いて返却する.
 */
export const stripTags_ = (str) => {
  return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '')
}
