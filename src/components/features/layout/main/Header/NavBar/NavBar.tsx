import { useRef, useEffect, useState } from 'react'
import { MouseEvent } from 'react'

import { ArrowIcon, Typography, RoundIconButton } from '@core'
import { useTheme } from '@hooks'

import { DropdownMenu } from '../DropdownMenu'
import { NAVBAR_PAGES } from './NavBar.constants'
import {
  NavBarWrap,
  NavBarItemLink,
  NavBarArrowWrap,
  NavBarItemDropdown,
  NavBavDropdownItem,
} from './NavBar.elements'
import { NavBarItems, NavBarProps } from './NavBar.types'

export const NavBar = ({ onClick }: NavBarProps) => {
  const theme = useTheme()
  const navBarPages: NavBarItems = NAVBAR_PAGES
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleOpenClick = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) {
      return
    }

    setOpen(!open)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false) // Закрывает меню, если клик был вне его
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <NavBarWrap>
      {navBarPages.map((item, index, array) => {
        if (item.type === 'dropdown') {
          return (
            <NavBarItemDropdown
              key={index}
              onClick={(event) => handleOpenClick(event)}
              ref={dropdownRef}
              $active={open}>
              <Typography variant="desktopBodyMedium1519" color={theme.palette.text.subText}>
                {item.name}
              </Typography>

              <NavBarArrowWrap $active={open}>
                <ArrowIcon />
              </NavBarArrowWrap>

              <DropdownMenu active={open}>
                <NavBavDropdownItem>
                  <Typography variant="desktopBodyMedium1519">Jungle Collection</Typography>
                  <RoundIconButton type="plus" />
                </NavBavDropdownItem>

                <NavBavDropdownItem>
                  <Typography variant="desktopBodyMedium1519">Jungle Collection</Typography>
                  <RoundIconButton type="plus" />
                </NavBavDropdownItem>

                <NavBavDropdownItem>
                  <Typography variant="desktopBodyMedium1519">Jungle Collection</Typography>
                  <RoundIconButton type="plus" />
                </NavBavDropdownItem>
              </DropdownMenu>
            </NavBarItemDropdown>
          )
        }

        return (
          <NavBarItemLink key={index} href={item.href.toString()}>
            <Typography variant="desktopBodyMedium1519" color={theme.palette.text.subText}>
              {item.name}
            </Typography>
          </NavBarItemLink>
        )
      })}
    </NavBarWrap>
  )
}
