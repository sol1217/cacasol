import Image from 'next/image'

import { Typography } from '@core'
import { HeroWithRoundIcon } from '@shared'
import dragonImage from '@assets/images/faq-dragon-hero-image.png'

import { HeroWrap, IconWrap } from './Hero.elements'

export const Hero = () => {
  return (
    <HeroWithRoundIcon>
      <HeroWrap>
        <Typography variant="headlineMobileHeadline1Bold3436" color="#fff">
          Часто задаваемые <br /> вопросы
        </Typography>
        <Typography variant="bodyMobileHeadlineBody4Regular1620" color="#fff">
          Найди интересующий вопрос <br /> или задай его Дракоше
        </Typography>
      </HeroWrap>
      <IconWrap>
        <Image src={dragonImage.src} height={dragonImage.height} width={dragonImage.width} alt="" />
      </IconWrap>
    </HeroWithRoundIcon>
  )
}
