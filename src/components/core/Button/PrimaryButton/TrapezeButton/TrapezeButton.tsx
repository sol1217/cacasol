import { Typography } from '@core'

import {
  TrapezeButtonWrap,
  TrapezeButtonMiddle,
  TrapezeButtonTypographyWrap,
} from './TrapezeButton.elements'
import { TrapezeButtonProps } from './TrapezeButton.types'
import { TrapezeButtonEdge } from './TrapezeButtonEdge'

export const TrapezeButton = ({
  children,
  variant,
  typographyVariant,
  isDisabled = false,
}: TrapezeButtonProps) => {
  return (
    <TrapezeButtonWrap $variant={variant} $isDisabled={isDisabled}>
      <TrapezeButtonEdge />

      <TrapezeButtonMiddle>
        <TrapezeButtonTypographyWrap $isDisabled={isDisabled}>
          <Typography variant={typographyVariant}>{children}</Typography>
        </TrapezeButtonTypographyWrap>
      </TrapezeButtonMiddle>

      <TrapezeButtonEdge reversed={true} />
    </TrapezeButtonWrap>
  )
}
