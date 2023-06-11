import styled from 'styled-components'

export const PressedMask = styled.div`
  border-radius: 11px;
  background: ${({ theme }) => theme.palette.button.up.bgPressed};
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity ${({ theme }) => theme.transition.default};
`

export const UpButtonWrap = styled.div`
  border-radius: 14px;
  border: 1.5px solid ${({ theme }) => theme.palette.button.up.bg};
  padding: 2px;

  &:active ${PressedMask} {
    opacity: 1;
    border-color: ${({ theme }) => theme.palette.button.up.bgPressed};
  }
`

export const Inner = styled.div`
  border-radius: 11px;
  height: 40px;
  width: 40px;
  background: ${({ theme }) => theme.palette.button.up.bgGradient};
  position: relative;
`

export const ArrowWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`
