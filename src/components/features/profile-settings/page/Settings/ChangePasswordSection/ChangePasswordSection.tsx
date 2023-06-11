import { useState } from 'react'

import {
  Box,
  PopUp,
  Typography,
  PrimaryButton,
  SecondaryButton,
  RegistrationInput,
  RegistrationInputVariant,
} from '@core'
import { Divider } from '@features/sign-up/page/SignUpPage.elements'

import { ChangePasswordSectionWrap } from './ChangePasswordSection.elements'

export const ChangePasswordSection = () => {
  const [passwordWasChangedIsOpen, setPasswordWasChangedIsOpen] = useState(false)

  return (
    <>
      <ChangePasswordSectionWrap>
        <Box sx={{ marginBottom: '24px' }}>
          <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
            Смена пароля будет доступна тебе в случае регистрации с помощью почты
          </Typography>
        </Box>
        <Box sx={{ gap: '12px', marginBottom: '16px' }}>
          <Box sx={{ alignItems: 'flex-start', gap: '4px' }}>
            <RegistrationInput
              placeholder="Введи старый пароль"
              onChange={(value) => {}}
              variant={RegistrationInputVariant.Password}
            />
            <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#ff5c5c">
              Неверно введен старый пароль
            </Typography>
          </Box>
          <RegistrationInput
            placeholder="Введи новый пароль"
            onChange={(value) => {}}
            variant={RegistrationInputVariant.Password}
          />
          <Box sx={{ alignItems: 'flex-start', gap: '4px' }}>
            <RegistrationInput
              placeholder="Повтори новый пароль"
              onChange={(value) => {}}
              variant={RegistrationInputVariant.Password}
            />
            <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#ff5c5c">
              Пароли не совпадают
            </Typography>
          </Box>
        </Box>

        <PrimaryButton
          variant="defaultBig"
          onClick={() => setPasswordWasChangedIsOpen(!passwordWasChangedIsOpen)}>
          <Typography
            variant="primaryButtonMobilePrimaryButtonLargeBold1826"
            sx={{ textShadow: '0 2px 0 rgba(0, 0, 0, 0.13)' }}
            color="#fff">
            Сохранить
          </Typography>
        </PrimaryButton>
      </ChangePasswordSectionWrap>

      <PopUp isOpen={passwordWasChangedIsOpen} iconVariant="Checkmark">
        <Box sx={{ gap: '2px', marginBottom: '20px' }}>
          <Typography variant="headlineMobileHeadline4Bold2028">Твой пароль был изменен</Typography>
          <Typography
            variant="bodyMobileHeadlineBody6Medium1418"
            color="#86959e"
            sx={{ textAlign: 'center' }}>
            Теперь ты можешь использовать новый пароль при следующем входе в свой аккаунт
          </Typography>
        </Box>

        <Divider />

        <Box sx={{ flexDirection: 'row', justifyContent: 'center', gap: '16px' }}>
          <SecondaryButton
            variant="whiteOutlined148px"
            onClick={() => setPasswordWasChangedIsOpen(false)}>
            Закрыть
          </SecondaryButton>
        </Box>
      </PopUp>
    </>
  )
}
