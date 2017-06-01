// @flow
import React from 'react'
import styled from 'styled-components'

const Avatar = styled.div`
  position: relative;
  flex: 0 0 40px;
  height: 40px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 1rem;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
  }
`

export const chatbot = () => (
  <Avatar>
    <img
      src={`https://randomuser.me/api/portraits/men/32.jpg`}
      title={`Hello I'm you best friend Didier`}
    />
  </Avatar>
)

export default chatbot
