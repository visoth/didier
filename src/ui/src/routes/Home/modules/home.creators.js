import * as model from './models/home.model'

export const askQuestion = (question) => ({ type: model.ASK_QUESTION, question })
export const receiveAnswer = (question, answer) => ({ type: model.RECEIVE_ANSWER, question, answer })
