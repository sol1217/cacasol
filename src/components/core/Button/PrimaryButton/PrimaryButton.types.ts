import { FC, ReactNode } from 'react'

import { Icon } from '@core'
import { TypographyVariantName } from '@styles'

export type IconType = FC<Icon>

export type PrimaryButtonProps = {
  children: string | ReactNode
  variant: PrimaryButtonVariant
  isDisabled?: boolean
  icon?: IconType
  onClick?: () => void
}

export type PrimaryButtonShape = 'rectangular' | 'trapeze'
export type PrimaryButtonVariantInfo = {
  shape: PrimaryButtonShape
  typography: TypographyVariantName
}

type DefaultVariant = 'defaultBig' | 'defaultMedium' | 'defaultSmall'
type TrapezeVariant = 'trapazeBig' | 'trapezeSmall' | 'trapezeLanding'
type ChatVariant = 'chatBig'

export type PrimaryButtonVariant = DefaultVariant | TrapezeVariant | ChatVariant
export type PrimaryButtonSettings = Record<PrimaryButtonVariant, PrimaryButtonVariantInfo>
