import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export type SecondaryButtonProps = {
  variant: SecondaryButtonVariant
  children?: string
  isDisabled?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export type SecondaryButtonVariant =
  | 'whiteOutlinedGeneral'
  | 'whiteOutlined148px'
  | 'blue'
  | 'back'
  | 'orange'

export type SecondaryButtonVariants = Record<
  SecondaryButtonVariant,
  {
    mainStyles: FlattenSimpleInterpolation
    defaultStyles: FlattenSimpleInterpolation
    pressedStyles: FlattenSimpleInterpolation
    disabledStyles?: FlattenSimpleInterpolation
  }
>
