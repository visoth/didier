// @flow

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const COUNTER_DOUBLE_ASYNC_REQUEST = 'COUNTER_DOUBLE_ASYNC_REQUEST'

export const initialState = 0

export type Action = {
  type: typeof COUNTER_INCREMENT,
  payload: number
} | {
  type: typeof COUNTER_DOUBLE_ASYNC,
  payload: number
} | {
  type: typeof COUNTER_DOUBLE_ASYNC_REQUEST
}
