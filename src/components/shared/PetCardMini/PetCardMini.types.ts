import { StaticImageData } from 'next/image'
import { FlattenSimpleInterpolation } from 'styled-components'

export type PetCardMiniProps = {
  variant?: PetCardMiniVariant
  onClick?: () => void
  avatar: StaticImageData
  tags: PetCardMiniTag[]
  gradient: PetCardMiniApronGradient
}

export type PetCardMiniVariant = 'white' | 'faded76x68' | 'faded104x90'

export type PetCardMiniApronProps = {
  width: number
  height: number
  gradientFillUrl: PetCardMiniApronGradientFillUrl
}

export type PetCardMiniStyles = {
  color: string
  width: number
  height: number
  avatar: { size: number }
  tagPosition: Record<PetCardMiniTagPosition, FlattenSimpleInterpolation>
}

export type PetCardMiniTag = 'F' | 'R' | 'M' | 'N'

export type PetCardMiniTagPosition = 1 | 2 | 3

export type PetCardMiniApronGradient = 'grape' | 'sea' | 'orange'

export type PetCardMiniApronGradientFillUrl =
  | 'url(#PetCardMiniApronGradientOrange)'
  | 'url(#PetCardMiniApronGradientSea)'
  | 'url(#PetCardMiniApronGradientGrape)'
