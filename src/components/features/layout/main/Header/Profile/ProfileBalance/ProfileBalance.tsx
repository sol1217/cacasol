import { Typography, WalletIcon } from '@core'
import { useTheme } from '@hooks'

import { VerticalLine, ProfileBalanceWrap } from './ProfileBalance.elements'
import { ProfileBalanceProps } from './ProfileBalance.types'
import { RefillButton } from './RefillButton'

export const ProfileBalance = ({ value }: ProfileBalanceProps) => {
  const theme = useTheme()

  return (
    <ProfileBalanceWrap>
      <WalletIcon />
      <VerticalLine />
      <Typography
        variant="desktopPrice1717"
        sx={{ marginRight: '8px', color: theme.palette.header.profile.primary }}>
        {value} ₽
      </Typography>
      <RefillButton />
    </ProfileBalanceWrap>
  )
}
