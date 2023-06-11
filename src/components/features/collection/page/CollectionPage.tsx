import { PromoCarousel, OtherCollectionsCarousel } from '@shared'
import otherCollectionsCarouselImage1 from '@assets/images/case-cold.png'
import otherCollectionsCarouselImage2 from '@assets/images/case-dark.png'
import otherCollectionsCarouselImage3 from '@assets/images/case-jungli.png'
import promoCarouselBackgroundImage2 from '@assets/images/promo-carousel-bg-image-2.png'
import promoCarouselBackgroundImage3 from '@assets/images/promo-carousel-bg-image-3.png'
import promoCarouselBackgroundImage from '@assets/images/promo-carousel-bg-image.png'
import { PromoCarouselSlide } from '@shared/PromoCarousel/PromoCarousel.types'

import { Chests } from './Chests'
import { CollectionPageWrap } from './CollectionPage.elements'

export const CollectionPage = () => {
  const promoCarouselData: PromoCarouselSlide[] = [
    {
      header: `Cold mega 1`,
      subHeader: 'коллекция',
      buttonText: 'Открыть за 3.499 ₽',
      backgroundImage: promoCarouselBackgroundImage.src,
      onButtonClick: () => {},
    },
    {
      header: `Cold mega 2`,
      subHeader: 'коллекция',
      buttonText: 'Открыть за 2.499 ₽',
      backgroundImage: promoCarouselBackgroundImage2.src,
      onButtonClick: () => {},
    },
    {
      header: `Cold mega 3`,
      subHeader: 'коллекция',
      buttonText: 'Открыть за 1.499 ₽',
      backgroundImage: promoCarouselBackgroundImage3.src,
      onButtonClick: () => {},
    },
  ]

  const otherCollectionsCarouselData = [
    {
      name: 'Cold',
      image: otherCollectionsCarouselImage1,
      url: '/',
    },
    {
      name: 'Cold 2',
      image: otherCollectionsCarouselImage2,
      url: '/',
    },
    {
      name: 'Cold 3',
      image: otherCollectionsCarouselImage3,
      url: '/',
    },
  ]

  return (
    <CollectionPageWrap>
      <PromoCarousel data={promoCarouselData} />
      <Chests />
      <OtherCollectionsCarousel data={otherCollectionsCarouselData} />
    </CollectionPageWrap>
  )
}
