import { useState } from 'react'

import { SliderDots, Typography, PrimaryButton, NavigationButton } from '@core'

import {
  SliderDotsWrap,
  TypographyWrap,
  PrimaryButtonWrap,
  TrapezeCutOutWrap,
  PromoCarouselArrowWrap,
  PromoCarouselInnerWrap,
  PromoCarouselOuterWrap,
  PromoCarouselTrapezeCutOut,
} from './PromoCarousel.elements'
import { PromoCarouselProps } from './PromoCarousel.types'

export const PromoCarousel = ({ data }: PromoCarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <PromoCarouselOuterWrap>
      <PromoCarouselInnerWrap $backgroundImage={data[activeSlide].backgroundImage}>
        <TypographyWrap>
          <Typography variant="headlineMobileHeadline3Bold2230">
            {data[activeSlide].subHeader}
          </Typography>
          <Typography variant="headlineMobileHeadline1Bold3436">
            {data[activeSlide].header}
          </Typography>
        </TypographyWrap>
        <SliderDotsWrap>
          <SliderDots activeSlide={activeSlide} nOfSlides={data.length} theme="light" />
        </SliderDotsWrap>
        <PromoCarouselArrowWrap $direction="forward">
          <NavigationButton
            direction="forward"
            size="large"
            onClick={() => {
              setActiveSlide((prevSlide) => (prevSlide + 1) % 3)
            }}
          />
        </PromoCarouselArrowWrap>
        <PromoCarouselArrowWrap $direction="backward">
          <NavigationButton
            direction="backward"
            size="large"
            onClick={() => {
              setActiveSlide((prevSlide) => Math.abs(prevSlide - 1) % 3)
            }}
          />
        </PromoCarouselArrowWrap>

        <PrimaryButtonWrap>
          <PrimaryButton variant="trapazeBig">{data[activeSlide].buttonText}</PrimaryButton>
        </PrimaryButtonWrap>

        <TrapezeCutOutWrap>
          <PromoCarouselTrapezeCutOut />
        </TrapezeCutOutWrap>
      </PromoCarouselInnerWrap>
    </PromoCarouselOuterWrap>
  )
}
