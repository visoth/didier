// @flow
import { fork, all } from 'redux-saga/effects'
import rootCounterSaga from '/routes/Counter/sagas/counter.saga'

export default function* rootSagas (): Generator<*, *, *> {
  yield all([
    fork(rootCounterSaga)
  ])
}
