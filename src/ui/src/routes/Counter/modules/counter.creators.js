import * as CounterModel from '/routes/Counter/modules/counter.model'

export const increment = () => ({ type: CounterModel.COUNTER_INCREMENT, payload: 1 })
export const doubleAsync = () => ({ type: CounterModel.COUNTER_DOUBLE_ASYNC_REQUEST })
