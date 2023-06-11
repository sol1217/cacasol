import Image from 'next/image'
import Link from 'next/link'

import { Box, TextButton, Typography } from '@core'

import { OtherCollectionsCardProps } from '../OtherCollectionsCarousel.types'
import { OtherCollectionsCardWrap } from './OtherCollectionsCard.elements'

export const OtherCollectionsCard = ({ name, image, url }: OtherCollectionsCardProps) => {
  return (
    <OtherCollectionsCardWrap>
      <Image src={image.src} alt="" width={82} height={88} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="headlineMobileHeadline5Bold1826">Коллекция {name}</Typography>
        <Link href={url} style={{ textDecoration: 'none' }}>
          <TextButton variant="viewAllArrowRight" onClick={() => {}}>
            Смотреть
          </TextButton>
        </Link>
      </Box>
    </OtherCollectionsCardWrap>
  )
}
