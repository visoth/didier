export function interpolate (str, data) {
  return str.replace(/:([^(/|&?)]+(?:\\.[^(/|&)]*)*)/g,
    (m, prop) => String(data[prop]) || `:${prop}/`
  )
}

export const addStartingSlash = (path) => (path[0] === '/' ? path : `/${path}`)

export const stripTrailingSlash = (str) => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1)
  }
  return str
}
