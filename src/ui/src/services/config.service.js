/* @flow */
export async function loadConf () {
  return await fetch(`${window.location.origin}/config.json?${new Date().getTime()}`)
}

export type Conf = { [key: string]: string }

class Config {

  _conf: Conf

  constructor () {
    this._conf = {}
  }

  set conf (conf: { [key: string]: string }) {
    this._conf = { ...this._conf, ...conf }
  }

  get conf (): Conf {
    return this._conf
  }
}

export const config = new Config()
