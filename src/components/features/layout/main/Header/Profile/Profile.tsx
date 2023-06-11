import { Box, PawIcon, LogoutIcon, SettingsIcon, SettingsButtonToggle } from '@core'

import { ProfileWrap } from './Profile.elements'
import { ProfileProps } from './Profile.types'
import { ProfileBalance } from './ProfileBalance'
import { UserInfo } from './UserInfo'

export const Profile = ({}: ProfileProps) => {
  return (
    <ProfileWrap>
      <UserInfo username="Субару" id="ID subaru228" />

      <Box sx={{ flexDirection: 'row', gap: '8px' }}>
        <SettingsButtonToggle tooltipText="Твои питомцы">
          <PawIcon />
        </SettingsButtonToggle>

        <SettingsButtonToggle tooltipText="Параметры">
          <SettingsIcon />
        </SettingsButtonToggle>

        <ProfileBalance value={1000} />

        <SettingsButtonToggle tooltipText="Выйти">
          <LogoutIcon />
        </SettingsButtonToggle>
      </Box>
    </ProfileWrap>
  )
}
