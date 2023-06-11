import { PlusIcon } from '@core'

import { RefillButtonWrap } from './RefillButton.elements'
import { RefillButtonProps } from './RefillButton.types'

export const RefillButton = ({ onClick }: RefillButtonProps) => {
  return (
    <RefillButtonWrap>
      <PlusIcon />
    </RefillButtonWrap>
  )
}
