import styled from 'styled-components'

export default styled.div`
  position: relative;
  padding: 1rem;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: block;
    background: linear-gradient(to bottom, transparent 0%,#F5F5F5 100%);
    height: 2rem;
    position: fixed;
    bottom: 6rem;
    z-index: 1;
    width: 560px;
    z-index: 1;
  }
`
