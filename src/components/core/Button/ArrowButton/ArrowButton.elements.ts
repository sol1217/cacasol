import styled from 'styled-components'

export const ArrowButtonWrap = styled.button`
  background-color: transparent;
  border: none;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: pointer;

    & > img:last-of-type {
      opacity: 1;
    }
  }

  & > img:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }
`
