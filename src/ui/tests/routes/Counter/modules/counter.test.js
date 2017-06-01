/* eslint-disable */
import counter from '/routes/Counter/modules/counter'
import * as CounterModel from '/routes/Counter/modules/model/counter.model'

describe('Testing Counter reducer', () => {
    const initialState = 0

    it('should return initial state', () => {
        expect(counter(initialState, {type: null})).to.deep.equal(initialState)
    })

    it('should increment to 1', () => {
        const action = {
            type: CounterModel.COUNTER_INCREMENT,
            payload: 1
        }
        expect(counter(initialState, action)).to.equals(1)
    })

    it('should increment by 2', () => {
        const initialStateOf1 = 1
        const action = {
            type: CounterModel.COUNTER_DOUBLE_ASYNC
        }
        expect(counter(initialStateOf1, action)).to.equals(2)
    })
})
