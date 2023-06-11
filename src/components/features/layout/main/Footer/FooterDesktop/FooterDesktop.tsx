import Image from 'next/image'

import { Box, TextLink, Typography } from '@core'
import discordIcon from '@assets/svg/desktop-footer-discord-icon.svg'
import instagramIcon from '@assets/svg/desktop-footer-instagram-icon.svg'
import tiktokIcon from '@assets/svg/desktop-footer-tiktok-icon.svg'
import youtubeIcon from '@assets/svg/desktop-footer-youtube-icon.svg'

import {
  FOOTER_LINKS,
  FOOTER_ADDRESS,
  FOOTER_COPYRIGHT,
  FOOTER_STATISTICS,
} from '../Footer.constants'
import {
  FooterDesktopLink,
  FooterDesktopWrap,
  FooterDesktopLinks,
  FooterDesktopSocials,
  FooterDesktopDelimeter,
  FooterDesktopInfoblock,
  FooterDesktopSocialItem,
  FooterDesktopStatistics,
  FooterDesktopStatisticsItem,
} from './FooterDesktop.elements'
import { FooterDesktopProps } from './FooterDesktop.types'

export const FooterDesktop = ({}: FooterDesktopProps) => {
  const statistics = FOOTER_STATISTICS
  const links = FOOTER_LINKS

  const listStatistics = statistics.map((item, idx) => {
    return (
      <FooterDesktopStatisticsItem key={idx}>
        <Typography variant="desktopBodySRegular1212">{item.name}</Typography>

        <Typography variant="desktopH32225">{item.value}</Typography>
      </FooterDesktopStatisticsItem>
    )
  })

  return (
    <FooterDesktopWrap>
      <FooterDesktopInfoblock>
        <Box sx={{ gap: '10px', marginBottom: '15px', alignItems: 'flex-start' }}>
          <Typography variant="desktopBodySRegular1212">{FOOTER_COPYRIGHT}</Typography>
          <Typography variant="desktopBodySRegular1212">{FOOTER_ADDRESS}</Typography>
        </Box>

        <FooterDesktopDelimeter />

        <Box sx={{ gap: '10px', marginTop: '12px', alignItems: 'flex-start' }}>
          <Box sx={{ gap: '15px', flexDirection: 'row' }}>
            <Typography variant="desktopBodySRegular1212">
              <TextLink href="/">Проферка на честность</TextLink>
            </Typography>

            <Typography variant="desktopBodySRegular1212">
              <TextLink href="/">Правила пользования</TextLink>
            </Typography>
          </Box>

          <Typography variant="desktopBodySRegular1212">
            <TextLink href="/">Политика конфиденциальности</TextLink>
          </Typography>
        </Box>
      </FooterDesktopInfoblock>

      <FooterDesktopStatistics>{listStatistics}</FooterDesktopStatistics>

      <FooterDesktopLinks>
        {links.map((link) => (
          <FooterDesktopLink href={link.href} key={link.title}>
            <Typography variant="desktopBodySRegular1212">{link.title}</Typography>
            <FooterDesktopDelimeter />
          </FooterDesktopLink>
        ))}
      </FooterDesktopLinks>

      <FooterDesktopSocials>
        <FooterDesktopSocialItem href="/">
          <Image
            src={discordIcon.src}
            height={discordIcon.height}
            width={discordIcon.width}
            alt=""
          />
        </FooterDesktopSocialItem>
        <FooterDesktopSocialItem href="/">
          <Image
            src={instagramIcon.src}
            height={instagramIcon.height}
            width={instagramIcon.width}
            alt=""
          />
        </FooterDesktopSocialItem>
        <FooterDesktopSocialItem href="/">
          <Image src={tiktokIcon.src} height={tiktokIcon.height} width={tiktokIcon.width} alt="" />
        </FooterDesktopSocialItem>
        <FooterDesktopSocialItem href="/">
          <Image
            src={youtubeIcon.src}
            height={youtubeIcon.height}
            width={youtubeIcon.width}
            alt=""
          />
        </FooterDesktopSocialItem>
      </FooterDesktopSocials>
    </FooterDesktopWrap>
  )
}
