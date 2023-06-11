import { Screen } from '@core'
import { useTheme } from '@hooks'

import { FooterWrap } from './Footer.elements'
import { FooterDesktop } from './FooterDesktop'
import { FooterMobile } from './FooterMobile'

export const Footer = () => {
  const theme = useTheme()

  return (
    <FooterWrap>
      <Screen device="mobile">
        <FooterMobile />
      </Screen>

      <Screen device="desktop">
        <FooterDesktop />
      </Screen>
    </FooterWrap>
  )
}
