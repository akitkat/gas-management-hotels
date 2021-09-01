import { stringify } from 'query-string'
import { uniq_ } from './utils'

export const fetchUsedHotelNo_ = () => {
  const contentfulObj = JSON.parse(ScriptProperties.getProperty('CONTENTFUL_OBJ'))
  const regex = /^<hotel-info-item no="(.[^"]+)".*><\/hotel-info-item>$/gm
  const parameters = {
    access_token: contentfulObj.accessToken,
    content_type: 'post',
    limit: 1000,
    select: 'fields.body',
  }
  const url = `https://preview.contentful.com/spaces/${contentfulObj.spaceId}/environments/master/entries?${stringify(parameters)}`
  const res = UrlFetchApp.fetch(url).getContentText()
  let data = []
  JSON.parse(res).items.forEach((e) => {
    if (!e?.fields?.body) {
      return
    }

    const tags = (e.fields.body.match(regex) ?? []).filter((e) => !!e).flat()
    if (!tags) {
      return
    }

    const ids = tags.map((e) => e.match(/no="(\d+)"/)[1])
    if (ids.length < 1) {
      return
    }

    data = data.concat(ids)
  })

  // cast to int[]
  data = data.map((e) => parseInt(e))
  return uniq_(data)
}
