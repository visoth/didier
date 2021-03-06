import * as model from './models/home.model'

export default (state = model.initialState, action) => {
  switch (action.type) {
    case model.RECEIVE_ANSWER:
      return {
        ...state,
        conversation: [...state.conversation, {
          question: null,
          answer: action.answer,
          sound: action.withSound
        }]
      }
    case model.ASK_QUESTION:
      return {
        ...state,
        conversation: [...state.conversation, {
          question: action.question,
          answer: null,
          sound: false
        }]
      }
    default:
      return state
  }
}
