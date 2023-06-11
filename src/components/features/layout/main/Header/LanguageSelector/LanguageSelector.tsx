import { useState } from 'react'

import { Typography, BlackArrow } from '@core'

import { DropdownMenu } from '../DropdownMenu'
import { flags } from './LanguageSelector.constants'
import {
  FlagIcon,
  LanguageSelectorWrap,
  LanguageSelectorArrowWrap,
  LanguageSelectorDropdownItem,
} from './LanguageSelector.elements'
import { LanguageSelectorProps } from './LanguageSelector.types'

export const LanguageSelector = ({}: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false)

  const handleOpenClick = (event: any) => {
    if (event.target !== event.currentTarget) {
      return
    }

    setOpen(!open)
  }

  return (
    <LanguageSelectorWrap onClick={(event) => handleOpenClick(event)}>
      <FlagIcon src={flags.ru.icon} alt="flag" />

      <LanguageSelectorArrowWrap $active={open}>
        <BlackArrow />
      </LanguageSelectorArrowWrap>

      <DropdownMenu active={open}>
        <LanguageSelectorDropdownItem>
          <Typography variant="desktopPrice1717">{flags.ru.name}</Typography>

          <FlagIcon src={flags.ru.icon} alt="flag" />
        </LanguageSelectorDropdownItem>

        <LanguageSelectorDropdownItem>
          <Typography variant="desktopPrice1717">{flags.en.name}</Typography>

          <FlagIcon src={flags.en.icon} alt="flag" />
        </LanguageSelectorDropdownItem>
      </DropdownMenu>
    </LanguageSelectorWrap>
  )
}
