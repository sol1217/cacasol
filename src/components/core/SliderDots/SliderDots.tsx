import { SliderDot, SliderDotsWrap, SliderDotOutline } from './SliderDots.elements'
import { SliderDotsProps } from './SliderDots.types'
import { getSliderDotsColor } from './SliderDots.utlis'

export const SliderDots = ({ activeSlide, nOfSlides, theme = 'dark' }: SliderDotsProps) => {
  return (
    <SliderDotsWrap>
      {[...new Array(nOfSlides)].map((value, index) => (
        <SliderDotOutline
          key={`slider-dot-${index}`}
          $isVisible={index === activeSlide}
          $color={getSliderDotsColor(theme)}>
          <SliderDot $color={getSliderDotsColor(theme)} />
        </SliderDotOutline>
      ))}
    </SliderDotsWrap>
  )
}
