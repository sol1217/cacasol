import { PetCardTag } from '@shared/PetCard/PetCard.types'

export type GambleSliderCardProps = {
  isFocused?: boolean
  name: string
  price: number
  image: string
  gradient: GambleSliderCardGradient
  tags: PetCardTag[]
}

export type GambleSliderCardBackgroundProps = {
  width: number
  height: number
  gradient: GambleSliderCardGradient
}

export type GambleSliderCardGradient = 'grape' | 'sea' | 'orange'

export type GambleSliderCardGradientFillUrl =
  | 'url(#gambleSliderCardOrange)'
  | 'url(#gambleSliderCardSea)'
  | 'url(#gambleSliderCardGrape)'
