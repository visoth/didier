import { takeLatest, /* call */ put, all } from 'redux-saga/effects'
import { ASK_QUESTION } from '../modules/models/home.model'
import { receiveAnswer } from '../modules/home.creators'
// import botService from '/services/bot.service.js'

function* askQuestionSaga (action) {
  const result = { response: 'yes man' }// yield call(botService.askQuestion, action.question)
  yield put(receiveAnswer(action.question, result.response))
}

export default function* rootCounterSaga () {
  yield all([
    takeLatest(ASK_QUESTION, askQuestionSaga)
  ])
}
