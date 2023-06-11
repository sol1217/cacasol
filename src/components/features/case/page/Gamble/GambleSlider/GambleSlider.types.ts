import { PetCardTag } from '@shared/PetCard/PetCard.types'

import { GambleSliderCardGradient } from './GambleSliderCard/GambleSliderCard.types'

export type GambleSliderProps = { caseItems: CaseItem[] }

export type CaseItem = {
  name: string
  price: number
  image: string
  gradient: GambleSliderCardGradient
  tags: PetCardTag[]
}
