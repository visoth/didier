// @flow
import { fork, all } from 'redux-saga/effects'
import rootHomeSaga from '/routes/Home/sagas/home.saga'

export default function* rootSagas (): Generator<*, *, *> {
  yield all([
    fork(rootHomeSaga)
  ])
}
