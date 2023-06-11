import { GambleSliderCardGradient, GambleSliderCardGradientFillUrl } from './GambleSliderCard.types'

export const getGradientFillUrl = (gradient: GambleSliderCardGradient) => {
  const map: Record<GambleSliderCardGradient, GambleSliderCardGradientFillUrl> = {
    grape: 'url(#gambleSliderCardGrape)',
    orange: 'url(#gambleSliderCardOrange)',
    sea: 'url(#gambleSliderCardSea)',
  }

  return map[gradient]
}
