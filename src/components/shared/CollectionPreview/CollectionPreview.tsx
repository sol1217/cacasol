import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Box, Typography } from '@core'
import { useTheme } from '@hooks'
import { CollectionCard } from '@components/shared/CollectionCard'
import { GoToButtonBackground } from '@shared/CollectionPreview/GoToButtonBackground'

import {
  GoToButton,
  GoToButtonWrap,
  CollectionPreviewWrap,
  CollectionPreviewSliderWrap,
} from './CollectionPreview.elements'
import { CollectionPreviewProps } from './CollectionPreview.types'
import { CollectionPreviewArrow } from './CollectionPreviewArrow'

export const CollectionPreview = ({ title, titleFontVariant, goTo }: CollectionPreviewProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CollectionPreviewArrow direction="forward" />,
    prevArrow: <CollectionPreviewArrow direction="backward" />,
  }

  const theme = useTheme()

  return (
    <CollectionPreviewWrap>
      <Box sx={{ minHeight: '44px', alignItems: 'flex-start' }}>
        <Typography variant={titleFontVariant}>{title}</Typography>
      </Box>
      <CollectionPreviewSliderWrap>
        <Slider {...settings}>
          {[...new Array(30)].map((value, index) => (
            <Box key={index}>
              <CollectionCard />
            </Box>
          ))}
        </Slider>
      </CollectionPreviewSliderWrap>
      {goTo && (
        <GoToButtonWrap>
          <GoToButton href={goTo}>
            <Typography variant="textButtonMobileTextButton2Bold1422" color={theme}>
              Смотреть все
            </Typography>
            <GoToButtonBackground />
          </GoToButton>
        </GoToButtonWrap>
      )}
    </CollectionPreviewWrap>
  )
}
