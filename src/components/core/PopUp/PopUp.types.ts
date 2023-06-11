import { ReactNode } from 'react'

import { InfographicIconVariant } from '@core'

export type PopUpProps = {
  iconVariant: InfographicIconVariant
  isOpen: boolean
  children: ReactNode
}
