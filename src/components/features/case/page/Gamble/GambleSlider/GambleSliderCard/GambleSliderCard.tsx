import Image from 'next/image'

import { Box, Typography } from '@core'
import { getTagColor } from '@shared/PetCard/PetCard.utils'

import { Tag, TagsWrap, AvatarFrame, GambleSliderCardWrap } from './GambleSliderCard.elements'
import { GambleSliderCardProps } from './GambleSliderCard.types'
import { GambleSliderCardBackground } from './GambleSliderCardBackground'

export const GambleSliderCard = ({
  isFocused = false,
  image,
  name,
  price,
  gradient,
  tags,
}: GambleSliderCardProps) => (
  <GambleSliderCardWrap $isFocused={isFocused}>
    <Box
      sx={{ zIndex: 3, gap: isFocused ? '19px' : '12px', marginTop: isFocused ? '4px' : '18px' }}>
      <Box sx={{ gap: isFocused ? '12px' : '8px' }}>
        <AvatarFrame>
          <Image src={image} alt="" width={isFocused ? 28 : 26} height={isFocused ? 28 : 26} />
        </AvatarFrame>
        <Typography variant="cardPetsMobileHeadlineNameBold1313" color="white">
          {price} ₽
        </Typography>
      </Box>
      <div style={{ maxWidth: '100px' }}>
        <Typography variant="cardPetsMobileHeadlineNameBold1313">{name}</Typography>
      </div>
      <TagsWrap $bottom={isFocused ? 14 : 12}>
        {tags.map((tag) => (
          <Tag key={tag} $color={getTagColor(tag)}>
            {tag}
          </Tag>
        ))}
      </TagsWrap>
    </Box>
    <Box sx={{ position: 'absolute', bottom: 0 }}>
      <GambleSliderCardBackground
        width={isFocused ? 121 : 111}
        height={isFocused ? 154 : 140}
        gradient={gradient}
      />
    </Box>
  </GambleSliderCardWrap>
)
