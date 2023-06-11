import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Typography, PrimaryButton, SecondaryButton } from '@core'
import userAvatar from '@assets/images/userpic.png'
import gearIcon from '@assets/svg/gear-icon.svg'
import logoutIcon from '@assets/svg/logout-icon.svg'
import socialDiscordIcon from '@assets/svg/social-discord-icon.svg'
import socialInstagramIcon from '@assets/svg/social-instagram-icon.svg'
import socialTiktokIcon from '@assets/svg/social-tiktok-icon.svg'
import socialYoutubeIcon from '@assets/svg/social-youtube-icon.svg'
import { LanguageSelector } from '@features/layout/main/Header/Menu/LanguageSelector'

import {
  Logo,
  Divider,
  GearWrap,
  MenuWrap,
  UserWrap,
  UserAvatar,
  LogoutButton,
  MidLinksWrap,
  UserDataWrap,
  FooterLinksWrap,
  MidLinksSection,
  FooterTopSection,
  LoginButtonsWrap,
  SocialMediaLinks,
  UserOnlineStatus,
  CollectionLinksWrap,
  LoggedUserContainer,
} from './Menu.elements'
import { MenuProps } from './Menu.types'

export const Menu = ({}: MenuProps) => {
  const [isUserLogged, setIsUserLogged] = useState(true)

  return (
    <MenuWrap>
      <div>
        <Logo>Логотип</Logo>

        {isUserLogged ? (
          <LoggedUserContainer>
            <UserWrap>
              <UserAvatar>
                <Image src={userAvatar.src} width={40} height={40} alt="" />
                <UserOnlineStatus />
              </UserAvatar>
              <UserDataWrap>
                <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959E">
                  name@example.com
                </Typography>
                <Typography variant="bodyMobileHeadlineBody1Bold1620">Сергей Мейнкунов</Typography>
              </UserDataWrap>
              <GearWrap>
                <button>
                  <Image
                    src={gearIcon.src}
                    width={gearIcon.width}
                    height={gearIcon.height}
                    alt=""
                  />
                </button>
              </GearWrap>
            </UserWrap>
            <LogoutButton>
              <Image
                src={logoutIcon.src}
                width={logoutIcon.width}
                height={logoutIcon.height}
                alt=""
              />
            </LogoutButton>
          </LoggedUserContainer>
        ) : (
          <LoginButtonsWrap>
            <PrimaryButton variant="defaultMedium">Войти в аккаунт</PrimaryButton>
            <SecondaryButton variant="whiteOutlinedGeneral">Регистрация</SecondaryButton>
          </LoginButtonsWrap>
        )}

        <Divider />

        <MidLinksWrap>
          <MidLinksSection>
            <Link href="/">
              <Typography variant="headlineMobileHeadline5Bold1826">Главная</Typography>
            </Link>
            <CollectionLinksWrap>
              <Typography variant="headlineMobileHeadline5Bold1826">Коллекции:</Typography>
              <Link href="/collection/1">
                <Typography variant="bodyMobileHeadlineBody3Medium1624">Джунгли</Typography>
              </Link>
              <Link href="/collection/2">
                <Typography variant="bodyMobileHeadlineBody3Medium1624">Зимняя</Typography>
              </Link>
              <Link href="/collection/3">
                <Typography variant="bodyMobileHeadlineBody3Medium1624">Магия</Typography>
              </Link>
            </CollectionLinksWrap>
          </MidLinksSection>
          <MidLinksSection>
            <Link href="/contacts">
              <Typography variant="headlineMobileHeadline5Bold1826">Контакты</Typography>
            </Link>
            <Link href="/faq">
              <Typography variant="headlineMobileHeadline5Bold1826">FAQ</Typography>
            </Link>
          </MidLinksSection>
        </MidLinksWrap>
      </div>

      <div>
        <FooterTopSection>
          <SocialMediaLinks>
            <Link href="/">
              <Image
                src={socialDiscordIcon.src}
                width={socialDiscordIcon.width}
                height={socialDiscordIcon.height}
                alt=""
              />
            </Link>
            <Link href="/">
              <Image
                src={socialTiktokIcon.src}
                width={socialTiktokIcon.width}
                height={socialTiktokIcon.height}
                alt=""
              />
            </Link>
            <Link href="/">
              <Image
                src={socialInstagramIcon.src}
                width={socialInstagramIcon.width}
                height={socialInstagramIcon.height}
                alt=""
              />
            </Link>
            <Link href="/">
              <Image
                src={socialYoutubeIcon.src}
                width={socialYoutubeIcon.width}
                height={socialYoutubeIcon.height}
                alt=""
              />
            </Link>
          </SocialMediaLinks>
          <LanguageSelector />
        </FooterTopSection>
        <FooterLinksWrap>
          <Link href="/">
            <Typography variant="bodyMobileHeadlineBody3Medium1624">
              Проверка на честность
            </Typography>
          </Link>
          <Link href="/">
            <Typography variant="bodyMobileHeadlineBody3Medium1624">Правила пользования</Typography>
          </Link>
          <Link href="/">
            <Typography variant="bodyMobileHeadlineBody3Medium1624">
              Политика конфиденциальности
            </Typography>
          </Link>
        </FooterLinksWrap>
      </div>
    </MenuWrap>
  )
}
