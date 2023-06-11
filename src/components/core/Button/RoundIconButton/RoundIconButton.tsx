import { PlusIcon } from '@core'
import { colors } from '@styles/colors'

import { RoundIconButtonWrap } from './RoundIconButton.elements'
import { RoundIconButtonProps } from './RoundIconButton.types'

export const RoundIconButton = ({ type }: RoundIconButtonProps) => {
  return (
    <RoundIconButtonWrap $variant={type}>
      <PlusIcon color={colors.dustyBlue} />
    </RoundIconButtonWrap>
  )
}
