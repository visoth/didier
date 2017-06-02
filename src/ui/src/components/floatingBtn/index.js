// @flow
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  width: 3rem;
  height: 3rem;
  background-color: white;
  border: 2px solid #EC008C;
  border-radius: 50%;
  position: relative;
  display: block;
  padding: 0.25rem 0.75rem 0.75rem;
  cursor: pointer;
  transition: background-color ease-in-out 0.25s;
  font-family: 'Roboto';
  box-shadow: 0 0.25rem 0.75rem #A9A9A9;

  &:hover {
    background-color: #EC008C;
    & > svg {
      fill: white;
    }
  }

  & > svg {
    fill: #EC008C;
    transition: fill ease-in-out 0.25s;
  }
`

const Notif = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  font-size: 0.75rem;
  color: white;
  background-color: #DA0630;
  text-align: center;
  line-height: 1rem;
`

export const floatingBtn = () => (
  <Wrapper>
    <Notif>3</Notif>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 82 101'
      style={{
        fillRule:'evenodd',
        clipRule:'evenodd',
        strokeLinejoin:'round',
        strokeMiterlimit:1.41421
      }}
    >
      <g id='ROBOT'>
        <path d='M53.399,17.2c-0.878,-1.17 -1.399,-2.624 -1.399,-4.2c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7c-0.098,0 -0.195,-0.002 -0.291,-0.006l-2.054,3.903c-0.66,1.254 -2.109,1.875 -3.473,1.489l-6.77,-1.918l0,4.826c2.407,3.594 6.054,8.166 12.526,8.166c23.062,0 23.062,47.417 23.062,60.589c0,5.268 -82,5.268 -82,0c0,-15.806 2.563,-60.589 25.625,-60.589c8.4,0 12.041,-5.697 14.389,-9.372c0.137,-0.213 0.269,-0.42 0.398,-0.619l0,-6.969c0,-0.941 0.441,-1.826 1.191,-2.393c0.75,-0.567 1.722,-0.75 2.627,-0.494l8.248,2.337l0.921,-1.75Zm-19.634,65.181c0,5.4 3.617,9 7.235,9c3.618,0 7.235,-3.6 7.235,-9c0,-0.987 -1.088,-0.621 -2.669,-0.088c-1.3,0.438 -2.933,0.988 -4.566,0.988c-1.633,0 -3.266,-0.55 -4.566,-0.988c-1.581,-0.533 -2.669,-0.899 -2.669,0.088Zm0,-16.116c0,-8.016 -3.618,-13.36 -7.236,-13.36c-3.617,0 -7.235,5.344 -7.235,13.36c0,2.672 0,10.688 7.235,10.688c0.464,0 0.899,-0.033 1.305,-0.096c-3.716,-0.683 -3.716,-4.847 -3.716,-6.317c0,-4.809 2.411,-8.016 4.823,-8.016c2.126,0 4.252,2.492 4.726,6.377c0.098,-1.061 0.098,-2 0.098,-2.636Zm21.706,-13.36c3.617,0 7.235,5.344 7.235,13.36c0,2.672 0,10.688 -7.235,10.688c-0.464,0 -0.899,-0.033 -1.305,-0.096c3.716,-0.683 3.716,-4.847 3.716,-6.317c0,-4.809 -2.411,-8.016 -4.823,-8.016c-2.126,0 -4.252,2.492 -4.726,6.377c-0.098,-1.061 -0.098,-2 -0.098,-2.636c0,-8.016 3.618,-13.36 7.236,-13.36Z'
        />
      </g>
    </svg>
  </Wrapper>
)

export default floatingBtn
