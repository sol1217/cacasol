import { useState } from 'react'
import Slider from 'react-slick'

import { Box, SliderDots, Typography } from '@core'

import { OtherCollectionsCard } from './OtherCollectionsCard'
import { SliderWrap, OtherCollectionsCarouselWrap } from './OtherCollectionsCarousel.elements'
import { OtherCollectionsCarouselProps } from './OtherCollectionsCarousel.types'

export const OtherCollectionsCarousel = ({ data }: OtherCollectionsCarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '16%',
    arrows: false,
    centerMode: true,
    beforeChange(currentSlide: number, nextSlide: number) {
      setActiveSlide(Math.ceil(nextSlide))
    },
  }

  return (
    <OtherCollectionsCarouselWrap>
      <Typography variant="headlineMobileHeadline3Bold2230">Другие коллекции:</Typography>
      <SliderWrap>
        <Slider {...settings}>
          {data.map((collection, index) => (
            <OtherCollectionsCard
              key={`other-collections-slider-item-${collection.name}`}
              name={collection.name}
              image={collection.image}
              url={collection.url}
            />
          ))}
        </Slider>
      </SliderWrap>
      <Box sx={{ display: 'flex', justifySelf: 'center' }}>
        <SliderDots nOfSlides={3} activeSlide={activeSlide} />
      </Box>
    </OtherCollectionsCarouselWrap>
  )
}
