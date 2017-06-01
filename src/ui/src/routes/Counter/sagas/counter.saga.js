// @flow
import { takeLatest, fork, put, all } from 'redux-saga/effects'
import { COUNTER_DOUBLE_ASYNC_REQUEST, COUNTER_DOUBLE_ASYNC } from '/routes/Counter/modules/counter.model'
import { delay } from 'redux-saga'

function* doubleIt (): Generator<*, *, *> {
  yield delay(1000)
  yield put({ type: COUNTER_DOUBLE_ASYNC })
}

function* doubleAsyncIncrementSaga (): Generator<*, *, *> {
  yield takeLatest(COUNTER_DOUBLE_ASYNC_REQUEST, doubleIt)
}

export default function* rootCounterSaga (): Generator<*, *, *> {
  yield all([
    fork(doubleAsyncIncrementSaga)
  ])
}
