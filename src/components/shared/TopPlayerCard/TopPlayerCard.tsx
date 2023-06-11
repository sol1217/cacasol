import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@core'
import userpic from '@assets/images/userpic.png'
import { CardBase } from '@components/shared/TopPlayerCard/CardBase'
import { StarIcon } from '@components/shared/TopPlayerCard/StarIcon'

import {
  PhotoWrap,
  RaitingWrap,
  StarIconWrap,
  UserNameWrap,
  UserOpenLinkWrap,
  TopPlayerCardWrap,
} from './TopPlayerCard.elements'
import { TopPlayerCardProps } from './TopPlayerCard.types'

export const TopPlayerCard = ({ primaryColor, secondaryColor }: TopPlayerCardProps) => {
  return (
    <TopPlayerCardWrap>
      <PhotoWrap>
        <Image src={userpic.src} width={30} height={30} alt="" />
        <StarIconWrap>
          <StarIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </StarIconWrap>
      </PhotoWrap>
      <CardBase color={primaryColor} />
      <UserNameWrap>
        <Typography as="div" variant="cardPetsMobileHeadlineNameBold1313">
          @user_medium
        </Typography>
      </UserNameWrap>
      <UserOpenLinkWrap>
        <Link href="/">
          <Typography variant="textButtonMobileTextButton6SemiboldUnderlined1014">
            Открыть профиль
          </Typography>
        </Link>
      </UserOpenLinkWrap>
      <RaitingWrap>
        <Typography variant="cardPetsMobileHeadlineLevelBold1111">2.11</Typography>
      </RaitingWrap>
    </TopPlayerCardWrap>
  )
}
