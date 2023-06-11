import { BalanceIcon, Typography } from '@core'

import { Background } from './Background'
import {
  BackgroundWrap,
  BalanceIconWrap,
  BalanceInfoWrap,
  BalanceIconContent,
  CheckBalanceButtonWrap,
} from './CheckBalanceButton.elements'

export const CheckBalanceButton = () => {
  return (
    <CheckBalanceButtonWrap href="">
      <BalanceIconWrap>
        <BalanceIconContent>
          <BalanceIcon />
        </BalanceIconContent>
      </BalanceIconWrap>
      <BalanceInfoWrap>
        <Typography variant="bodyMobileHeadlineBody9Medium1218">Баланс:</Typography>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">146,865 ₽</Typography>
      </BalanceInfoWrap>
      <BackgroundWrap>
        <Background />
      </BackgroundWrap>
    </CheckBalanceButtonWrap>
  )
}
