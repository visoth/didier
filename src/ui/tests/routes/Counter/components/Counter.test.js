/* eslint-disable */
import React from 'react'
import Counter from '/routes/Counter/components/Counter'

describe('Testing Counter component', () => {

    it('mounts Counter', () => {
        const wrapper = shallow(
            <Counter counter={2} actions={{
                increment: () => void(0),
                doubleAsync: () => void(0)
            }}/>
        );

        jespect(toJson(wrapper)).toMatchSnapshot();
    })

})
