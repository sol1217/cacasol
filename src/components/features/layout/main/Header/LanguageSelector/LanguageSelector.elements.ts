import Image from 'next/image'
import styled from 'styled-components'

import { DropdownMenuWrap } from '../DropdownMenu/DropdownMenu.elements'

export const LanguageSelectorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  background: 1px solid ${({ theme }) => theme.palette.dropdown.language.background};
  border: 1px solid ${({ theme }) => theme.palette.dropdown.language.stroke};
  border-radius: 24px;
  gap: 18px;
  cursor: pointer;
  position: relative;

  ${DropdownMenuWrap} {
    top: calc(100% + 15px);
  }

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.palette.tabBar.navigation.textSelect};
    }
  }
`

export const FlagIcon = styled(Image)`
  width: 26px;
  height: auto;
  filter: drop-shadow(0px 1.08333px 3.25px rgba(16, 24, 40, 0.1))
    drop-shadow(0px 1.08333px 2.16667px rgba(16, 24, 40, 0.06));
  pointer-events: none;
`

export const LanguageSelectorArrowWrap = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transform: ${({ $active }) => ($active ? 'rotateZ(180deg)' : undefined)};
  transition: ${({ theme }) => theme.transition.fast} ease;
  pointer-events: none;
`

export const LanguageSelectorDropdownItem = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  user-select: none;

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
  }
`
