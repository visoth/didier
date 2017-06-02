// @flow
import React, { Component } from 'react'
import { FadeInUp } from 'animate-components'
import styled from 'styled-components'

const Wrapper = styled.label`
  position: relative;
`

const IconButton = styled.a`
  position: absolute;
  right: 0.5rem;
  top: -0.15rem;
  cursor: pointer;

  & > svg {
    transition: fill ease-in-out 0.25s;
    fill: rgba(255, 255, 255, 0.6);
  }

  &:hover > svg {
    fill: white;
  }
`

const InputText = styled.textarea.attrs({
  type: 'text',
  placeholder:'type here...'
})`
  appearance: none;
  border: 0;
  border-top: 1px solid #DFDFDF;
  background-color: white;
  color: #2B2B2B;
  height: 4rem;
  line-height: 1.25rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  display: inline-block;
  width:100%;
  word-wrap: break-word;
  border-radius: 2px;
  outline: none;
  overflow: auto;
`

export default class Input extends Component {
  render () {
    return (
      <FadeInUp duration='0.25s' timingFunction='ease-in-out'>
        <Wrapper>
          <InputText />
          <IconButton>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path
                d='M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z' />
            </svg>
          </IconButton>
        </Wrapper>
      </FadeInUp>
    )
  }
}
