import { ReactNode } from 'react'

import { TypographyVariantName } from '@styles'

import { PrimaryButtonVariant } from '../PrimaryButton.types'

export type TrapezeButtonProps = {
  children: string | ReactNode
  variant: PrimaryButtonVariant
  typographyVariant: TypographyVariantName
  isDisabled: boolean
  onClick?: () => void
}
