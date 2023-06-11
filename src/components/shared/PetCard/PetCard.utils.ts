import { defaultTheme } from '@styles'
import blueShapePressed from '@assets/svg/pet-shape-blue-pressed.svg'
import blueShape from '@assets/svg/pet-shape-blue.svg'
import orangeShapePressed from '@assets/svg/pet-shape-orange-pressed.svg'
import orangeShape from '@assets/svg/pet-shape-orange.svg'
import purpleShapePressed from '@assets/svg/pet-shape-purple-pressed.svg'
import purpleShape from '@assets/svg/pet-shape-purple.svg'

import { PetCardTag, CardBgImage, PetCategory } from './PetCard.types'

export const getTagColor = (tag: PetCardTag) => {
  const map: Record<PetCardTag, string> = {
    F: defaultTheme.palette.levels.F,
    R: defaultTheme.palette.levels.R,
    M: defaultTheme.palette.levels.M,
    N: defaultTheme.palette.levels.N,
  }

  return map[tag]
}

export const getCardBgImage = (category: PetCategory) => {
  const map: Record<PetCategory, CardBgImage> = {
    1: { main: blueShape, pressed: blueShapePressed },
    2: { main: orangeShape, pressed: orangeShapePressed },
    3: { main: purpleShape, pressed: purpleShapePressed },
  }

  return map[category]
}
