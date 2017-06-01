// @flow
import * as CounterModel from '/routes/Counter/modules/counter.model'

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state: number = CounterModel.initialState, action: CounterModel.Action) {
  switch (action.type) {
    case CounterModel.COUNTER_INCREMENT:
      return state + action.payload
    case CounterModel.COUNTER_DOUBLE_ASYNC:
      return state * 2
    default:
      return state
  }
}
