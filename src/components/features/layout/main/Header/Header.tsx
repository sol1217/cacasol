import { useState } from 'react'

import { LogoutIcon, PrimaryButton } from '@core'
import { useScrollBlock } from '@hooks'

import { BalanceButton } from './BalanceButton'
import { HeaderWrap, HeaderSide } from './Header.elements'
import { HeaderProps } from './Header.types'
import { HeaderLogo } from './HeaderLogo'
import { LanguageSelector } from './LanguageSelector'
import { Menu } from './Menu'
import { NavBar } from './NavBar'
import { Profile } from './Profile'
import { ToggleButton } from './ToggleButton'
import { variantStyles } from './variantStyles'

export const Header = ({ variant = 'default' }: HeaderProps) => {
  const isAuth = false
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [blockScroll, allowScroll] = useScrollBlock()

  const toggleButtonHandler = (state: boolean) => {
    setIsMenuOpen(state)

    state ? blockScroll() : allowScroll()
  }

  return (
    <HeaderWrap $variant={variant}>
      <HeaderSide>
        <HeaderLogo />
        <NavBar />
      </HeaderSide>

      <HeaderSide>
        {isAuth ? (
          <Profile />
        ) : (
          <PrimaryButton variant="defaultBig" icon={LogoutIcon}>
            Вход или Регистрация
          </PrimaryButton>
        )}

        <LanguageSelector />
      </HeaderSide>

      <ToggleButton onToggle={toggleButtonHandler} sx={variantStyles[variant].toggleButton} />
      {variant !== 'auth' && <BalanceButton />}
      {isMenuOpen && <Menu />}
    </HeaderWrap>
  )
}
