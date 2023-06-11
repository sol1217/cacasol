import { colors } from '@styles/colors'

import { SliderDotsTheme } from './SliderDots.types'

export const getSliderDotsColor = (theme: SliderDotsTheme): string => {
  const map: Record<SliderDotsTheme, string> = {
    light: colors.crystal,
    dark: colors.silver,
  }

  return map[theme]
}
