import Image from 'next/image'

import { HeroWithRoundIcon } from '@shared'
import userpic from '@assets/images/userpic.png'

import { HeroWrap, IconWrap, IconWrapInner } from './Hero.elements'

export const Hero = () => {
  return (
    <HeroWithRoundIcon>
      <HeroWrap />
      <IconWrap>
        <IconWrapInner>
          <Image src={userpic.src} height={80} width={80} alt="" />
        </IconWrapInner>
      </IconWrap>
    </HeroWithRoundIcon>
  )
}
