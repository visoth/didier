import { ALLOWED_CULTURES, DEFAULT_CULTURE } from './i18n.config'
import { addStartingSlash } from './string.helpers'
import { findKey, find } from 'lodash'

class I18n {

  constructor () {
    this._culture = ''
    this._countryCode = ''
  }

  set culture (culture) {
    this._culture = culture
    this._countryCode = find(ALLOWED_CULTURES, { culture: this._culture }).countryCode || ''
  }

  get culture () {
    return this._culture
  }

  get countryCode () {
    return this._countryCode
  }

  getCultureFromUrl (url = null) {
    const u = (!url) ? window.location.pathname : url
    const c = u.split('/')[1]
    let i

    if (c) {
      i = findKey(ALLOWED_CULTURES, { culture: c })
    }
    if (!i) {
      this.redirectToDefaultCulture()
    }
    return (i && c) ? c : DEFAULT_CULTURE
  }

  redirectToDefaultCulture () {
    const { location } = window
    const pathname = location.pathname.match(/^\/([a-zA-Z-]*)/)[1]
    const defaultPathname = location.pathname.replace(pathname, DEFAULT_CULTURE)
    window.location.pathname = addStartingSlash(defaultPathname).replace('.html', '')
  }
}

export const i18n = new I18n()
