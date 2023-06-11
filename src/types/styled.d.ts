import 'styled-components'

import { defaultTheme } from '@styles'

declare module 'styled-components' {
  export type DefaultTheme = typeof defaultTheme
}
