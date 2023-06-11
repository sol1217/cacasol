import { Settings } from '@features/profile-settings/page/Settings'

import { Hero } from './Hero'
import { ProfilePageWrap } from './ProfileSettingsPage.elements'
import { UserStatistics } from './UserStatistics'

export const ProfileSettingsPage = () => {
  return (
    <ProfilePageWrap>
      <Hero />
      <UserStatistics />
      <Settings />
    </ProfilePageWrap>
  )
}
