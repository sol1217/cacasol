import styled from 'styled-components'

import { breakpoints } from '@styles/breakpoints'

export const BalanceButtonWrap = styled.div`
  width: 165px;
  height: 56px;
  position: relative;
  padding-right: 11px;

  @media screen and (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`
