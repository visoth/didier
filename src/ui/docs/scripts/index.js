import http from 'http'
import finalhandler from 'finalhandler'
import serveStatic from 'serve-static'

const serve = serveStatic('docs/docsDist')

const server = http.createServer((req, res) => {
  const done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(8000, () => console.log('Listen on: http://localhost:8000'))
