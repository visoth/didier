// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string
}

const Wrapper = styled.div`
  position: absolute;
  left: calc(40px + 1rem);
  font-size: 11px;
  color: #A9A9A9;
  line-height: 1.25rem;
  top: -1.25rem;
`

const Name = (props: Props) => (
  <Wrapper>
    {props.label}
  </Wrapper>
)

export default Name
