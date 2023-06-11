import { useState } from 'react'

import {
  Box,
  PopUp,
  Option,
  Select,
  Checkbox,
  TextButton,
  Typography,
  PrimaryButton,
  RegistrationInput,
  RegistrationInputVariant,
} from '@core'

import { currencyOptions } from './SignUpPage.constants'
import {
  Divider,
  FormWrap,
  TopMaskWrap,
  CheckBoxWrap,
  SignUpPageWrap,
  SignUpPageInner,
  SectionTitleWrap,
} from './SignUpPage.elements'
import { SocialLinksIn } from './SocialLinksIn'
import { TopMask } from './TopMask'

export const SignUpPage = () => {
  const [currencySelectIsOpen, setCurrencySelectIsOpen] = useState(false)
  const [currency, setCurrency] = useState<Option | null>(null)

  return (
    <>
      <SignUpPageWrap>
        <SignUpPageInner>
          <TopMaskWrap>
            <TopMask />
            <SectionTitleWrap>
              <Typography variant="headlineMobileHeadline3Bold2230" color="#ff6b3d">
                Регистрация
              </Typography>
            </SectionTitleWrap>
          </TopMaskWrap>
          <SocialLinksIn />
          <FormWrap>
            <Box sx={{ marginBottom: '16px' }}>
              <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
                либо используя email
              </Typography>
            </Box>
            <Box sx={{ marginBottom: '10px', gap: '16px' }}>
              <RegistrationInput
                placeholder="Введи никнейм"
                onChange={(value) => {}}
                variant={RegistrationInputVariant.Nickname}
              />
              <RegistrationInput
                placeholder="Введи свою почту"
                onChange={(value) => {}}
                variant={RegistrationInputVariant.Email}
              />
              <RegistrationInput
                placeholder="Введи свой пароль"
                onChange={(value) => {}}
                variant={RegistrationInputVariant.Password}
              />
              <RegistrationInput
                placeholder="Повтори пароль"
                onChange={(value) => {}}
                variant={RegistrationInputVariant.Password}
              />
            </Box>
            <CheckBoxWrap>
              <Checkbox value={false} onToggle={() => {}} />
              <Typography variant="bodyMobileHeadlineBody9Medium1218">
                Я согласен с{' '}
                <TextButton variant="orange" href="/">
                  Политикой Конфиденциальности
                </TextButton>{' '}
                и{' '}
                <TextButton variant="orange" href="/">
                  Правилами использования
                </TextButton>
              </Typography>
            </CheckBoxWrap>
          </FormWrap>
          <Box sx={{ gap: '14px' }}>
            <PrimaryButton variant="defaultMedium">Создать аккаунт</PrimaryButton>
            <Typography variant="bodyMobileHeadlineBody3Medium1624">
              или{' '}
              <TextButton variant="blue" href="/sign-in">
                войди
              </TextButton>{' '}
              в свой аккаунт
            </Typography>
          </Box>
        </SignUpPageInner>
      </SignUpPageWrap>

      <PopUp isOpen={currencySelectIsOpen} iconVariant="Settings">
        <Box sx={{ gap: '2px', marginBottom: '20px' }}>
          <Typography variant="headlineMobileHeadline4Bold2028">Выбор валюты</Typography>
          <Typography
            variant="bodyMobileHeadlineBody6Medium1418"
            color="#86959e"
            sx={{ textAlign: 'center' }}>
            Внимательно изучи доступные валюты и выбери валюту, которая будет использоваться в твоем
            аккаунте
          </Typography>
        </Box>
        <Box sx={{ gap: '8px' }}>
          <Select
            value={currency}
            onChange={(value) => setCurrency(value)}
            options={currencyOptions}
            placeholder="- Выбери валюту -"
          />
          <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#86959e">
            <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#ff6b3d">
              Внимание:
            </Typography>{' '}
            сменить валюту после регистрации можно будет только при обращении в тех. поддержку
          </Typography>
        </Box>

        <Divider />

        <PrimaryButton variant="defaultMedium">Сохранить</PrimaryButton>
      </PopUp>
    </>
  )
}
