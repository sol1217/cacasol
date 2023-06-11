import Image from 'next/image'

import { Typography } from '@core'
import discordIcon from '@assets/svg/contacts-discord-icon.svg'
import instagramIcon from '@assets/svg/contacts-instagram-icon.svg'
import mailIcon from '@assets/svg/contacts-mail-icon.svg'
import tiktikIcon from '@assets/svg/contacts-tiktok-icon.svg'
import webIcon from '@assets/svg/contacts-web-icon.svg'
import youtubeIcon from '@assets/svg/contacts-youtube-icon.svg'

import { IconWrap, ContactLink, ContactLinksWrap } from './ContactLinks.elements'

export const ContactLinks = () => {
  return (
    <ContactLinksWrap>
      <ContactLink href="https://starpets.com" target="_blank">
        <IconWrap>
          <Image src={webIcon.src} width={webIcon.width} height={webIcon.height} alt="" />
        </IconWrap>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">starpets.com</Typography>
      </ContactLink>

      <ContactLink href="mailto:info@starpets.com" target="_blank">
        <IconWrap>
          <Image src={mailIcon.src} width={mailIcon.width} height={mailIcon.height} alt="" />
        </IconWrap>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">info@starpets.com</Typography>
      </ContactLink>

      <ContactLink href="https://www.tiktok.com/@starpets" target="_blank">
        <IconWrap>
          <Image src={tiktikIcon.src} width={tiktikIcon.width} height={tiktikIcon.height} alt="" />
        </IconWrap>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">@starpets</Typography>
      </ContactLink>

      <ContactLink href="https://www.instagram.com/starpets" target="_blank">
        <IconWrap>
          <Image
            src={instagramIcon.src}
            width={instagramIcon.width}
            height={instagramIcon.height}
            alt=""
          />
        </IconWrap>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">@starpets</Typography>
      </ContactLink>

      <ContactLink href="https://www.youtube.com/@Starpets" target="_blank">
        <IconWrap>
          <Image
            src={youtubeIcon.src}
            width={youtubeIcon.width}
            height={youtubeIcon.height}
            alt=""
          />
        </IconWrap>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">Starpets</Typography>
      </ContactLink>

      <ContactLink href="https://discord.com/@starpets" target="_blank">
        <IconWrap>
          <Image
            src={discordIcon.src}
            width={discordIcon.width}
            height={discordIcon.height}
            alt=""
          />
        </IconWrap>
        <Typography variant="bodyMobileHeadlineBody1Bold1620">@starpets</Typography>
      </ContactLink>
    </ContactLinksWrap>
  )
}
