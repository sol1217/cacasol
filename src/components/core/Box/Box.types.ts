import { ReactNode } from 'react'
import { CSSObject } from 'styled-components'

export type BoxProps = {
  element?: keyof HTMLElementTagNameMap
  children?: ReactNode
  sx?: CSSObject
}
