import { parse, format } from 'url'
import { fromJS } from 'immutable'

const locationFromUrl = (_url) => {
  const url = typeof _url === 'object' ? format(_url) : _url
  const { hash, search, pathname } = parse(url)
  return fromJS({
    pathname,
    search: search ? search : '',
    hash: hash ? hash : '',
  })
}

export default locationFromUrl
