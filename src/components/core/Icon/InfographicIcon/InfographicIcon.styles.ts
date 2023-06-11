import { defaultTheme } from '@styles'
import arrowDown from '@assets/svg/infographic-icon-arrow-down.svg'
import arrowUp from '@assets/svg/infographic-icon-arrow-up.svg'
import checkMark from '@assets/svg/infographic-icon-check-mark.svg'
import clock from '@assets/svg/infographic-icon-clock.svg'
import cross from '@assets/svg/infographic-icon-cross.svg'
import sadEmoji from '@assets/svg/infographic-icon-sad-emoji.svg'
import search from '@assets/svg/infographic-icon-search.svg'
import settings from '@assets/svg/infographic-icon-settings.svg'
import warning from '@assets/svg/infographic-icon-warning.svg'

import { InfographicIconVariants } from './InfographicIcon.types'

export const infographicIconStyle: InfographicIconVariants = {
  Checkmark: {
    backgroundColor: defaultTheme.palette.icon.popUp.circleSuccess,
    outlineColor: defaultTheme.palette.icon.popUp.strokeSuccess,
    shape: 'circle',
    image: checkMark,
    imageWidth: 21,
    imageHeight: 15,
  },
  Search: {
    backgroundColor: defaultTheme.palette.icon.popUp.circleSearch,
    outlineColor: defaultTheme.palette.icon.popUp.strokeSearch,
    shape: 'circle',
    image: search,
    imageWidth: 23,
    imageHeight: 23,
  },
  Cross: {
    backgroundColor: defaultTheme.palette.icon.popUp.circleError,
    outlineColor: defaultTheme.palette.icon.popUp.strokeError,
    shape: 'circle',
    image: cross,
    imageWidth: 31,
    imageHeight: 31,
  },
  Settings: {
    backgroundColor: defaultTheme.palette.icon.popUp.circleFilter,
    outlineColor: defaultTheme.palette.icon.popUp.strokeFilter,
    shape: 'circle',
    image: settings,
    imageWidth: 22,
    imageHeight: 22,
  },
  Warning: {
    backgroundColor: defaultTheme.palette.icon.popUp.circleWarning,
    outlineColor: defaultTheme.palette.icon.popUp.strokeWarning,
    shape: 'circle',
    image: warning,
    imageWidth: 20,
    imageHeight: 17,
  },
  SadEmoji: {
    backgroundColor: defaultTheme.palette.icon.popUp.circleSad,
    outlineColor: defaultTheme.palette.icon.popUp.strokeSad,
    shape: 'circle',
    image: sadEmoji,
    imageWidth: 20,
    imageHeight: 20,
  },
  ArrowDownCircle: {
    backgroundColor: defaultTheme.palette.icon.wallet.circleExpenses,
    outlineColor: defaultTheme.palette.icon.wallet.strokeExpenses,
    shape: 'circle',
    image: arrowDown,
    imageWidth: 19,
    imageHeight: 22,
  },
  ClockCircle: {
    backgroundColor: defaultTheme.palette.icon.wallet.circleWait,
    outlineColor: defaultTheme.palette.icon.wallet.strokeWait,
    shape: 'circle',
    image: clock,
    imageWidth: 19,
    imageHeight: 22,
  },
  ClockRectangle: {
    backgroundColor: defaultTheme.palette.icon.wallet.circleWait,
    shape: 'rectangle',
    image: clock,
    imageWidth: 16,
    imageHeight: 18,
  },
  ArrowDownRectangle: {
    backgroundColor: defaultTheme.palette.icon.wallet.circleExpenses,
    shape: 'rectangle',
    image: arrowDown,
    imageWidth: 16,
    imageHeight: 18,
  },
  ArrowUp: {
    backgroundColor: defaultTheme.palette.icon.wallet.circleIncome,
    shape: 'rectangle',
    image: arrowUp,
    imageWidth: 16,
    imageHeight: 18,
  },
}
