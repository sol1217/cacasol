import { ReactNode } from 'react'
import { CSSObject } from 'styled-components'

import { TypographyVariantName } from '@styles'

export type TypographyProps = {
  variant?: TypographyVariantName
  children?: ReactNode
  as?: keyof HTMLElementTagNameMap
  sx?: CSSObject
  color?: string | 'currentColor'
  wrap?: boolean
}
