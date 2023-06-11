import Link from 'next/link'
import styled from 'styled-components'

import { breakpoints } from '@styles/breakpoints'
import { colors } from '@styles/colors'
import { RoundIconButtonWrap } from '@core/Button/RoundIconButton/RoundIconButton.elements'

import { DropdownMenuWrap } from '../DropdownMenu/DropdownMenu.elements'

export const NavBarWrap = styled.div`
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (min-width: ${breakpoints.laptop}) {
    display: flex;
  }
`

export const NavBarItemLink = styled(Link)<{ $active?: boolean }>`
  height: 100%;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 7px;
  user-select: none;

  span {
    color: ${({ $active }) => ($active ? ({ theme }) => theme.palette.text.basicText : undefined)};
    pointer-events: none;
  }

  &::after {
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    content: '';
    width: 100%;
    min-width: 50px;
    height: 7px;
    background: #f46c32;
    border-radius: 0 0 12px 12px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.palette.text.basicText} !important;
    }

    &::after {
      display: block !important;
    }
  }

  ${DropdownMenuWrap} {
    top: calc(100% - 10px);
  }
`

export const NavBarItemDropdown = NavBarItemLink.withComponent('div')

export const NavBarArrowWrap = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transform: ${({ $active }) => ($active ? 'rotateZ(180deg)' : undefined)};
  transition: ${({ theme }) => theme.transition.fast} ease;
  pointer-events: none;
`

export const NavBavDropdownItem = styled.div`
  min-width: 230px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.palette.dropdown.basic.stroke};
  }

  &:last-child::after {
    display: none;
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.palette.tabBar.navigation.textSelect} !important;
    }

    ${RoundIconButtonWrap} {
      background: ${colors.lightOrange} !important;

      svg path {
        stroke: ${colors.crystal};
      }
    }
  }
`
