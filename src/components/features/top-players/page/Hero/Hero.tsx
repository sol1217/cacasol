import Image from 'next/image'

import { Typography } from '@core'
import { HeroWithRoundIcon } from '@shared'
import coinIcon from '@assets/svg/coin-icon.svg'

import { HeroWrap, IconWrap, IconWrapInner } from './Hero.elements'

export const Hero = () => {
  return (
    <HeroWithRoundIcon>
      <HeroWrap>
        <Typography variant="headlineMobileHeadline1Bold3436" color="#fff">
          Топ игроков
        </Typography>
        <Typography variant="bodyMobileHeadlineBody4Regular1620" color="#fff">
          Игроки, которые открыли больше <br /> всего сундуков
        </Typography>
      </HeroWrap>
      <IconWrap>
        <IconWrapInner>
          <Image src={coinIcon.src} height={coinIcon.height} width={coinIcon.width} alt="" />
        </IconWrapInner>
      </IconWrap>
    </HeroWithRoundIcon>
  )
}
