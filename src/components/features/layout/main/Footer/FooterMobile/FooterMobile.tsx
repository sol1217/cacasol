import Image from 'next/image'
import Link from 'next/link'

import { Box, Typography } from '@core'
import { useTheme } from '@hooks'
import discordIcon from '@assets/svg/social-discord-icon.svg'
import instagramIcon from '@assets/svg/social-instagram-icon.svg'
import tiktokIcon from '@assets/svg/social-tiktok-icon.svg'
import youtubeIcon from '@assets/svg/social-youtube-icon.svg'

import { FOOTER_STATISTICS } from '../Footer.constants'
import {
  Address,
  Copyright,
  MailLinks,
  Statistics,
  InnerContainer,
  OuterContainer,
  StatisticsItem,
  HorizontalLinks,
} from './FooterMobile.elements'
import { FooterMobileProps } from './FooterMobile.types'

export const FooterMobile = ({}: FooterMobileProps) => {
  const theme = useTheme()
  const statistics = FOOTER_STATISTICS

  const listStatistics = statistics.map((item, idx) => {
    return (
      <StatisticsItem key={idx}>
        <Typography
          variant="headlineMobileHeadline5Bold1826"
          color={theme.palette.footer.primaryText}>
          {item.value}
        </Typography>
        <Typography
          variant="bodyMobileHeadlineBody9Medium1218"
          color={theme.palette.footer.primaryText}>
          {item.name}
        </Typography>
      </StatisticsItem>
    )
  })

  return (
    <OuterContainer>
      <InnerContainer>
        <Statistics>{listStatistics}</Statistics>

        <MailLinks>
          <Box sx={{ width: '50%' }}>
            <Box sx={{ marginBottom: '6px', alignItems: 'flex-start' }}>
              <Typography variant="bodyMobileHeadlineBody1Bold1620">Разделы</Typography>
            </Box>
            <Box sx={{ marginBottom: '4px', alignItems: 'flex-start' }}>
              <Link href="/">
                <Typography
                  variant="bodyMobileHeadlineBody9Medium1218"
                  color={theme.palette.footer.primaryText}>
                  Главная страница
                </Typography>
              </Link>
            </Box>
            <Box sx={{ marginBottom: '4px', alignItems: 'flex-start' }}>
              <Link href="/">
                <Typography
                  variant="bodyMobileHeadlineBody9Medium1218"
                  color={theme.palette.footer.primaryText}>
                  Коллекции
                </Typography>
              </Link>
            </Box>
            <Box sx={{ marginBottom: '4px', alignItems: 'flex-start' }}>
              <Link href="/">
                <Typography
                  variant="bodyMobileHeadlineBody9Medium1218"
                  color={theme.palette.footer.primaryText}>
                  FAQ
                </Typography>
              </Link>
            </Box>
            <Box sx={{ marginBottom: '4px', alignItems: 'flex-start' }}>
              <Link href="/">
                <Typography
                  variant="bodyMobileHeadlineBody9Medium1218"
                  color={theme.palette.footer.primaryText}>
                  Кошелек
                </Typography>
              </Link>
            </Box>
            <Box sx={{ marginBottom: '4px', alignItems: 'flex-start' }}>
              <Link href="/">
                <Typography
                  variant="bodyMobileHeadlineBody9Medium1218"
                  color={theme.palette.footer.primaryText}>
                  Настройки
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ width: '50%', rowGap: '12px' }}>
            <Box sx={{ alignItems: 'flex-start' }}>
              <Typography variant="bodyMobileHeadlineBody1Bold1620">Социальные сети</Typography>
            </Box>
            <Box sx={{ columnGap: '8px', flexDirection: 'row' }}>
              <Link href="/">
                <Image
                  src={instagramIcon.src}
                  width={instagramIcon.width}
                  height={instagramIcon.height}
                  alt="instagram"
                />
              </Link>
              <Link href="/">
                <Image
                  src={tiktokIcon.src}
                  width={tiktokIcon.width}
                  height={tiktokIcon.height}
                  alt="tiktok"
                />
              </Link>
              <Link href="/">
                <Image
                  src={discordIcon.src}
                  width={discordIcon.width}
                  height={discordIcon.height}
                  alt="discord"
                />
              </Link>
              <Link href="/">
                <Image
                  src={youtubeIcon.src}
                  width={youtubeIcon.width}
                  height={youtubeIcon.height}
                  alt="youtube"
                />
              </Link>
            </Box>
            <Box sx={{ alignItems: 'flex-start' }}>
              <Link href="mailto:info@starpets.com">
                <Typography
                  variant="bodyMobileHeadlineBody8Bold1220"
                  color={theme.palette.footer.emailLink}>
                  info@starpets.com
                </Typography>
              </Link>
            </Box>
          </Box>
        </MailLinks>

        <HorizontalLinks>
          <Link href="/">
            <Typography
              variant="bodyMobileHeadlineBody12Semibold1010"
              color={theme.palette.footer.primaryText}>
              Правила пользования
            </Typography>
          </Link>
          <Link href="/">
            <Typography
              variant="bodyMobileHeadlineBody12Semibold1010"
              color={theme.palette.footer.primaryText}>
              Политика конфиденциальности
            </Typography>
          </Link>
        </HorizontalLinks>

        <Address>
          <Typography
            variant="bodyMobileHeadlineBody11Medium1016"
            color={theme.palette.footer.secondaryText}>
            16 John Nicholas Crescent, Ellesmere Port, Cheshire, United Kingdom, CH65 2DL
          </Typography>
        </Address>

        <Copyright>
          <Typography
            variant="bodyMobileHeadlineBody11Medium1016"
            color={theme.palette.footer.secondaryText}>
            © 2023 STARPETS.GG All Rights Reserved
          </Typography>
        </Copyright>
      </InnerContainer>
    </OuterContainer>
  )
}
