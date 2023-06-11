import Image from 'next/image'

import logoImage from '@assets/svg/logo.svg'

import { HeaderLogoWrap } from './HeaderLogo.elements'
import { HeaderLogoProps } from './HeaderLogo.types'

export const HeaderLogo = ({ sx = {} }: HeaderLogoProps) => {
  return (
    <HeaderLogoWrap sx={sx}>
      <Image src={logoImage.src} alt="logo" width={165} height={20} style={{ cursor: 'pointer' }} />
    </HeaderLogoWrap>
  )
}
