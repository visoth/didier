
import { injectReducer } from '../../store/reducers'
import asyncComponent from '/routes/App/AsyncComponent'

export default (store) => asyncComponent(() => new Promise((resolve) => {
  /*  Webpack - use 'require.ensure' to create a split point
  and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
    /*  Webpack - use require callback to define
    dependencies for bundling   */
    const Chatbot = require('./containers/chatbot.container').default
    const reducer = require('./modules/home.reducers').default

    /*  Add the reducer to the store on key 'counter'  */
    console.log('reducer: ', reducer)
    injectReducer(store, { key: 'home', reducer })

    /*  Return getComponent   */
    resolve(Chatbot)
    /* Webpack named bundle   */
  }, 'home')
}))
