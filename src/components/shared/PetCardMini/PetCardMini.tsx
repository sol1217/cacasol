import Image from 'next/image'

import { Box } from '@core'
import { defaultTheme } from '@styles'

import { PetCardMiniWrap, PetCardMiniTagWrap, PetCardMiniAvatarWrap } from './PetCardMini.elements'
import { petCardMiniStyles } from './PetCardMini.styles'
import { PetCardMiniProps, PetCardMiniTagPosition } from './PetCardMini.types'
import { getGradientFillUrl } from './PetCardMini.utils'
import { PetCardMiniApron } from './PetCardMiniApron'

export const PetCardMini = ({
  variant = 'white',
  onClick,
  avatar,
  tags,
  gradient,
}: PetCardMiniProps) => {
  const styles = petCardMiniStyles[variant]

  return (
    <PetCardMiniWrap $width={styles.width} $height={styles.height} $color={styles.color}>
      {tags.map((tag, index) => (
        <PetCardMiniTagWrap
          key={`case-feed-pet-card-${tag}`}
          $position={styles.tagPosition[(index + 1) as PetCardMiniTagPosition]}
          $color={defaultTheme.palette.levels[tag]}>
          {tag}
        </PetCardMiniTagWrap>
      ))}
      <PetCardMiniAvatarWrap $size={styles.avatar.size}>
        <Image src={avatar.src} alt="" width={avatar.width} height={avatar.height} />
      </PetCardMiniAvatarWrap>
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <PetCardMiniApron
          width={styles.width}
          height={styles.height}
          gradientFillUrl={getGradientFillUrl(gradient)}
        />
      </Box>
    </PetCardMiniWrap>
  )
}
