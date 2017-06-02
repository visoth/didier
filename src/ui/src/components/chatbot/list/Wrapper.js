import styled from 'styled-components'

export default styled.div`
  position: relative;
  padding: 0 1rem 1rem;
  height: calc(400px - 4rem);
  display: flex;
  flex-direction: column;
  overflow: auto;

  &::after {
    content: '';
    display: block;
    background: linear-gradient(to bottom, transparent 0%,#F5F5F5 100%);
    height: 2rem;
    position: fixed;
    bottom: 5.75rem;
    right: 2.5rem;
    z-index: 1;
    width: 320px;
    z-index: 1;
  }
`
