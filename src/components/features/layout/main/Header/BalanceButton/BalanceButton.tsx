import { RechargeBalanceButton } from '@core'

import { BalanceButtonWrap } from './BalanceButton.elements'
import { CheckBalanceButton } from './CheckBalanceButton'

export const BalanceButton = () => {
  return (
    <BalanceButtonWrap>
      <CheckBalanceButton />
      <RechargeBalanceButton />
    </BalanceButtonWrap>
  )
}
