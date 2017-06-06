import * as model from './models/home.model'

export const askQuestion = (question, withSound) => ({ type: model.ASK_QUESTION, question, withSound })
export const receiveAnswer = (question, answer, withSound) => ({ type: model.RECEIVE_ANSWER, question, answer, withSound })
