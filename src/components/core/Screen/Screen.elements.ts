import styled from 'styled-components'

import { breakpoints } from '@styles/breakpoints'

export const MobileScreen = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const TabletScreen = styled.div`
  @media (max-width: ${breakpoints.mobile}), (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`

export const DesktopScreen = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
