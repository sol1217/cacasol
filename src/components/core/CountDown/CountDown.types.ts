import { TypographyVariantName } from '@styles'

export type CountDownProps = {
  seconds: number
  variant: TypographyVariantName
  onEnd?: () => void
}
