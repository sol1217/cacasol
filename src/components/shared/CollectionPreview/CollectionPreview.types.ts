import { CustomArrowProps } from 'react-slick'

import { TypographyVariantName } from '@styles'

export type CollectionPreviewProps = {
  title: string
  titleFontVariant: TypographyVariantName
  goTo?: string
}

export interface CollectionPreviewArrowProps extends CustomArrowProps {
  direction: 'backward' | 'forward'
}
