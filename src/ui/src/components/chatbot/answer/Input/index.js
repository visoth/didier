// @flow
import React, { Component } from 'react'
import { FadeInUp } from 'animate-components'
import styled from 'styled-components'

const InputText = styled.span.attrs({
  contentEditable: true
})`
  background-color: #A13AFD;
  color: white;
  line-height: 1.25rem;
  max-height: calc((1.25rem * 2) + 2rem);
  padding: 0.5rem;
  display: inline-block;
  max-width: 30rem;
  min-width: 8rem;
  width:auto;
  word-wrap: break-word;
  border-radius: 2px;
  box-shadow: 0 1px 2px #A9A9A9;
  outline: none;
  overflow: auto;
`

export default class Input extends Component {
  render () {
    return (
      <FadeInUp duration='0.25s' timingFunction='ease-in-out'>
        <InputText>
          Type here...
        </InputText>
      </FadeInUp>
    )
  }
}
