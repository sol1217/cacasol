import { useState } from 'react'
import { motion, useMotionValue, useAnimationControls } from 'framer-motion'

import { SliderDots, SecondaryButton, NavigationButton } from '@core'

import { ReelWrap, GambleSliderWrap, SliderControlsWrap } from './GambleSlider.elements'
import { GambleSliderProps } from './GambleSlider.types'
import { GambleSliderCard } from './GambleSliderCard'

export const GambleSlider = ({ caseItems }: GambleSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const sliderControls = useAnimationControls()
  const sliderPosition = useMotionValue(120)

  const moveForward = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 4)

    sliderControls
      .start({
        x: sliderPosition.get() - 137,
        transition: { duration: 0.2 },
      })
      .catch()
  }

  const moveBackward = () => {
    setActiveSlide((prevSlide) => Math.abs(prevSlide - 1) % 4)

    sliderControls
      .start({
        x: sliderPosition.get() + 137,
        transition: { duration: 0.2 },
      })
      .catch()
  }

  return (
    <GambleSliderWrap>
      <ReelWrap>
        <motion.div
          animate={sliderControls}
          style={{
            width: '564px',
            display: 'flex',
            padding: '0 16px',
            flexDirection: 'row',
            gap: '16px',
            x: sliderPosition,
          }}>
          {caseItems.map((caseItem, index) => (
            <GambleSliderCard
              key={index}
              name={caseItem.name}
              price={caseItem.price}
              image={caseItem.image}
              gradient={caseItem.gradient}
              tags={caseItem.tags}
              isFocused={activeSlide === index}
            />
          ))}
        </motion.div>
      </ReelWrap>
      <SliderControlsWrap>
        <NavigationButton
          disabled={activeSlide === 0}
          size="large"
          direction="backward"
          onClick={moveBackward}
        />
        <SliderDots activeSlide={activeSlide} nOfSlides={caseItems.length} theme="light" />
        <NavigationButton
          disabled={activeSlide === caseItems.length - 1}
          size="large"
          direction="forward"
          onClick={moveForward}
        />
      </SliderControlsWrap>
      <SecondaryButton variant="orange">
        {`Продать за ${caseItems[activeSlide].price} ₽`}
      </SecondaryButton>
    </GambleSliderWrap>
  )
}
