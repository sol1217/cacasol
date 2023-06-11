import { PetCardMiniApronGradient, PetCardMiniApronGradientFillUrl } from './PetCardMini.types'

export const getGradientFillUrl = (gradient: PetCardMiniApronGradient) => {
  const map: Record<PetCardMiniApronGradient, PetCardMiniApronGradientFillUrl> = {
    grape: 'url(#PetCardMiniApronGradientGrape)',
    orange: 'url(#PetCardMiniApronGradientOrange)',
    sea: 'url(#PetCardMiniApronGradientSea)',
  }

  return map[gradient]
}
