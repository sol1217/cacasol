import { FlattenSimpleInterpolation } from 'styled-components'

export type TextButtonProps = {
  variant: TextButtonVariant
  onClick?: () => void
  children?: string
  isDisabled?: boolean
  href?: string
}

export type TextButtonArrowIconProps = {
  className: string
}

export type TextButtonVariant =
  | 'blue'
  | 'orange'
  | 'orangeUnderlined12px'
  | 'orangeUnderlined14px'
  | 'navigation'
  | 'viewAllArrowDown'
  | 'black'
  | 'viewAllArrowRight'
  | 'grey'

export type TextButtonVariants = Record<
  TextButtonVariant,
  {
    mainStyles: FlattenSimpleInterpolation
    pressedStyles: FlattenSimpleInterpolation
    disabledStyles?: FlattenSimpleInterpolation
  }
>
