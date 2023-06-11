import { PromoCarousel, OpenedCasesLiveFeed } from '@components/shared'
import leoAvatar from '@assets/images/pet-card-avatar-leo.png'
import monkeyAvatar from '@assets/images/pet-card-avatar-monkey.png'
import parrotAvatar from '@assets/images/pet-card-avatar-parrot.png'
import promoCarouselBackgroundImage2 from '@assets/images/promo-carousel-bg-image-2.png'
import promoCarouselBackgroundImage3 from '@assets/images/promo-carousel-bg-image-3.png'
import promoCarouselBackgroundImage from '@assets/images/promo-carousel-bg-image.png'
import { PetCardMiniProps } from '@shared/PetCardMini/PetCardMini.types'
import { PromoCarouselSlide } from '@components/shared/PromoCarousel/PromoCarousel.types'

import { ChestCollections } from './ChestCollections'
import { HomePageWrap } from './HomePage.elements'
import { TopChests } from './TopChests'
import { TopPlayers } from './TopPlayers'

export const HomePage = () => {
  const openedCasesLiveFeedPetCards: PetCardMiniProps[] = [
    {
      onClick: () => {},
      avatar: monkeyAvatar,
      tags: ['F', 'R', 'M'],
      gradient: 'orange',
    },
    {
      onClick: () => {},
      avatar: parrotAvatar,
      tags: ['N', 'M'],
      gradient: 'grape',
    },
    {
      onClick: () => {},
      avatar: leoAvatar,
      tags: ['R'],
      gradient: 'sea',
    },
    {
      onClick: () => {},
      avatar: monkeyAvatar,
      tags: ['N', 'R'],
      gradient: 'orange',
    },
    {
      onClick: () => {},
      avatar: parrotAvatar,
      tags: [],
      gradient: 'grape',
    },
    {
      onClick: () => {},
      avatar: monkeyAvatar,
      tags: ['F', 'R', 'M'],
      gradient: 'orange',
    },
    {
      onClick: () => {},
      avatar: parrotAvatar,
      tags: ['N', 'M'],
      gradient: 'grape',
    },
    {
      onClick: () => {},
      avatar: leoAvatar,
      tags: ['R'],
      gradient: 'sea',
    },
    {
      onClick: () => {},
      avatar: monkeyAvatar,
      tags: ['N', 'R'],
      gradient: 'orange',
    },
    {
      onClick: () => {},
      avatar: parrotAvatar,
      tags: [],
      gradient: 'grape',
    },
    {
      onClick: () => {},
      avatar: monkeyAvatar,
      tags: ['F', 'R', 'M'],
      gradient: 'orange',
    },
    {
      onClick: () => {},
      avatar: parrotAvatar,
      tags: ['N', 'M'],
      gradient: 'grape',
    },
    {
      onClick: () => {},
      avatar: leoAvatar,
      tags: ['R'],
      gradient: 'sea',
    },
    {
      onClick: () => {},
      avatar: monkeyAvatar,
      tags: ['N', 'R'],
      gradient: 'orange',
    },
    {
      onClick: () => {},
      avatar: parrotAvatar,
      tags: [],
      gradient: 'grape',
    },
  ]

  const promoCarouselData: PromoCarouselSlide[] = [
    {
      header: `Открой сундук \n Джунгли получи +1 \n в подарок`,
      subHeader: 'акция',
      buttonText: 'Открыть за 3.499 ₽',
      backgroundImage: promoCarouselBackgroundImage.src,
      onButtonClick: () => {},
    },
    {
      header: `Закрой сундук \n Джунгли получи -1 \n в подарок`,
      subHeader: 'акция',
      buttonText: 'Закрыть за 3.499 ₽',
      backgroundImage: promoCarouselBackgroundImage2.src,
      onButtonClick: () => {},
    },
    {
      header: `Открой сундук \n Джунгли получи 0 \n в подарок`,
      subHeader: 'акция',
      buttonText: 'Открой за 0.000 ₽',
      backgroundImage: promoCarouselBackgroundImage3.src,
      onButtonClick: () => {},
    },
  ]

  return (
    <HomePageWrap>
      <PromoCarousel data={promoCarouselData} />
      <OpenedCasesLiveFeed petCards={openedCasesLiveFeedPetCards} />
      <TopChests />
      <ChestCollections />
      <TopPlayers />
    </HomePageWrap>
  )
}
