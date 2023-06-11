import styled, { FlattenSimpleInterpolation } from 'styled-components'

import { breakpoints } from '@styles/breakpoints'

export const ToggleButtonWrap = styled.button<{ $sx: FlattenSimpleInterpolation }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.header.toggleButtonBackground};
  position: relative;
  z-index: 2;
  
  ${({ $sx }) => $sx}}

  @media screen and (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`
