import { Box, Typography } from '@core'
import { useTheme } from '@hooks'
import tempAvatarImage from '@assets/images/avatar-test.jpg'

import {
  UserInfoWrap,
  UserInfoAvatar,
  UserInfoAvatarWrap,
  UserInfoAvatarWrapInner,
} from './UserInfo.elements'
import { UserInfoProps } from './UserInfo.types'

export const UserInfo = ({ username, id }: UserInfoProps) => {
  const theme = useTheme()

  return (
    <UserInfoWrap>
      <UserInfoAvatarWrap>
        <UserInfoAvatarWrapInner>
          <UserInfoAvatar src={tempAvatarImage} alt="avatar" fill={true} />
        </UserInfoAvatarWrapInner>
      </UserInfoAvatarWrap>

      <Box sx={{ alignItems: 'unset', gap: '6px' }}>
        <Typography sx={{ color: theme.palette.header.profile.primary }} variant="desktopH41616">
          {username}
        </Typography>
        <Typography
          sx={{ color: theme.palette.header.profile.secondary }}
          variant="desktopBodySRegular1212">
          {id}
        </Typography>
      </Box>
    </UserInfoWrap>
  )
}
