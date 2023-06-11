import { StaticImageData } from 'next/image'
import { CSSObject } from 'styled-components'

export type InfographicIconProps = {
  variant: InfographicIconVariant
  sx?: CSSObject
}

export type InfographicIconVariant =
  | 'Checkmark'
  | 'Search'
  | 'Cross'
  | 'Settings'
  | 'Warning'
  | 'SadEmoji'
  | 'ArrowDownCircle'
  | 'ArrowDownRectangle'
  | 'ClockCircle'
  | 'ClockRectangle'
  | 'ArrowUp'

export type InfographicIconVariants = Record<
  InfographicIconVariant,
  | {
      shape: 'circle'
      backgroundColor: string
      outlineColor: string
      image: StaticImageData
      imageWidth: number
      imageHeight: number
    }
  | {
      shape: 'rectangle'
      backgroundColor: string
      image: StaticImageData
      imageWidth: number
      imageHeight: number
    }
>
