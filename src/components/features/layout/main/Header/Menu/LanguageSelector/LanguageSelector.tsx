import { useState } from 'react'
import Image from 'next/image'

import { Option, Select, Typography } from '@core'
import languageIconRussian from '@assets/images/language-icon-russian.png'

import { MenuOption, dropdownStyles, LanguageSelectorWrap } from './LanguageSelector.elements'
import { LanguageSelectorProps } from './LanguageSelector.types'

export const LanguageSelector = ({}: LanguageSelectorProps) => {
  const LANGUAGE_OPTIONS: Option[] = [
    {
      value: 'ru',
      label: (
        <MenuOption>
          <Image
            src={languageIconRussian.src}
            width={languageIconRussian.width}
            height={languageIconRussian.height}
            alt=""
          />
          <Typography variant="bodyMobileHeadlineBody3Medium1624">Русский</Typography>
        </MenuOption>
      ),
    },
    {
      value: 'ru',
      label: (
        <MenuOption>
          <Image
            src={languageIconRussian.src}
            width={languageIconRussian.width}
            height={languageIconRussian.height}
            alt=""
          />
          <Typography variant="bodyMobileHeadlineBody3Medium1624">Русский 2</Typography>
        </MenuOption>
      ),
    },
    {
      value: 'ru',
      label: (
        <MenuOption>
          <Image
            src={languageIconRussian.src}
            width={languageIconRussian.width}
            height={languageIconRussian.height}
            alt=""
          />
          <Typography variant="bodyMobileHeadlineBody3Medium1624">Русский 3</Typography>
        </MenuOption>
      ),
    },
  ]

  const [value, setValue] = useState(LANGUAGE_OPTIONS[0])

  return (
    <LanguageSelectorWrap>
      <Select
        value={value}
        onChange={(option) => setValue(option)}
        options={LANGUAGE_OPTIONS}
        dropdownStyles={dropdownStyles}
      />
    </LanguageSelectorWrap>
  )
}
