import * as model from './models/home.model'

export default (state = model.initialState, action) => {
  switch (action.type) {
    case model.RECEIVE_ANSWER:
      return {
        ...state,
        conversation: [...state.conversation, { question: action.question, answer: action.answer }]
      }
    case model.ACTIVATE_SOUND:
      return {
        ...state,
        useSound: action.useSound
      }
  }
}
