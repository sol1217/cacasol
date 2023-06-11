import Image from 'next/image'

import { Box, TextButton, Typography } from '@core'
import arrowDownIcon from '@assets/svg/profile-settings-arrow-down.svg'
import arrowRightIcon from '@assets/svg/profile-settings-arrow-right.svg'
import pawsIcon from '@assets/svg/profile-settings-paws.svg'

import { ButtonsWrap, StatisticsWrap, UserStatisticsWrap } from './UserStatistics.elements'
import { UserStatisticsProps } from './UserStatistics.types'

export const UserStatistics = ({}: UserStatisticsProps) => {
  return (
    <UserStatisticsWrap>
      <ButtonsWrap>
        <TextButton variant="navigation" href="/profile">
          Мой профиль
        </TextButton>
        <Typography variant="bodyMobileHeadlineBody5Bold1422">@user_zero</Typography>
      </ButtonsWrap>

      <StatisticsWrap>
        <Box sx={{ maxWidth: '52px' }}>
          <Box sx={{ flexDirection: 'row', gap: '4px', justifyContent: 'center' }}>
            <Image src={pawsIcon.src} height={pawsIcon.height} width={pawsIcon.width} alt="" />
            <Typography variant="headlineMobileHeadline5Bold1826">80</Typography>
          </Box>
          <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#86959e">
            Питомцы
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '52px' }}>
          <Box sx={{ flexDirection: 'row', gap: '4px', justifyContent: 'center' }}>
            <Image
              src={arrowRightIcon.src}
              height={arrowRightIcon.height}
              width={arrowRightIcon.width}
              alt=""
            />
            <Typography variant="headlineMobileHeadline5Bold1826">32</Typography>
          </Box>
          <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#86959e">
            Выведено
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '52px' }}>
          <Box sx={{ flexDirection: 'row', gap: '4px', justifyContent: 'center' }}>
            <Image
              src={arrowDownIcon.src}
              height={arrowDownIcon.height}
              width={arrowDownIcon.width}
              alt=""
            />
            <Typography variant="headlineMobileHeadline5Bold1826">24</Typography>
          </Box>
          <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#86959e">
            Продано
          </Typography>
        </Box>
      </StatisticsWrap>
    </UserStatisticsWrap>
  )
}
