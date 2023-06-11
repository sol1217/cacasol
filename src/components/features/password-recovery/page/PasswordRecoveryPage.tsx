import { useState } from 'react'

import {
  Box,
  PopUp,
  Select,
  CodeInput,
  CountDown,
  TextButton,
  Typography,
  PrimaryButton,
  SecondaryButton,
  RegistrationInput,
  RegistrationInputVariant,
} from '@core'
import { Divider } from '@features/sign-up/page/SignUpPage.elements'

import {
  FormWrap,
  TopMaskWrap,
  SectionTitleWrap,
  PasswordRecoveryPageWrap,
  PasswordRecoveryPageInner,
} from './PasswordRecoveryPage.elements'
import { TopMask } from './TopMask'

export const PasswordRecoveryPage = () => {
  const [chechEmailIsOpen, setChechEmailIsOpen] = useState(false)
  const [passwordWasChangedIsOpen, setPasswordWasChangedIsOpen] = useState(true)
  const [isAllowSetNewPassword, setIsAllowSetNewPassword] = useState(true)

  return (
    <>
      {isAllowSetNewPassword ? (
        <PasswordRecoveryPageWrap>
          <PasswordRecoveryPageInner>
            <TopMaskWrap>
              <TopMask />
              <SectionTitleWrap>
                <Typography variant="headlineMobileHeadline3Bold2230" color="#ff6b3d">
                  Новый пароль
                </Typography>
              </SectionTitleWrap>
            </TopMaskWrap>

            <FormWrap>
              <Box sx={{ marginBottom: '16px' }}>
                <Typography
                  variant="bodyMobileHeadlineBody6Medium1418"
                  color="#86959e"
                  sx={{ textAlign: 'center' }}>
                  Придумай новый пароль <br /> для своего аккаунта
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '10px', gap: '16px' }}>
                <RegistrationInput
                  placeholder="Введи новый пароль"
                  onChange={(value) => {}}
                  variant={RegistrationInputVariant.Password}
                />
                <RegistrationInput
                  placeholder="Повтори пароль"
                  onChange={(value) => {}}
                  variant={RegistrationInputVariant.Password}
                />
              </Box>
            </FormWrap>

            <Box sx={{ gap: '14px' }}>
              <PrimaryButton variant="defaultMedium" onClick={() => setChechEmailIsOpen(true)}>
                Сохранить
              </PrimaryButton>
              <Typography variant="bodyMobileHeadlineBody3Medium1624">
                или{' '}
                <TextButton variant="blue" href="/sign-in">
                  войди
                </TextButton>{' '}
                в свой аккаунт
              </Typography>
            </Box>
          </PasswordRecoveryPageInner>
        </PasswordRecoveryPageWrap>
      ) : (
        <PasswordRecoveryPageWrap>
          <PasswordRecoveryPageInner>
            <TopMaskWrap>
              <TopMask />
              <SectionTitleWrap>
                <Typography variant="headlineMobileHeadline3Bold2230" color="#ff6b3d">
                  Забыл пароль?
                </Typography>
              </SectionTitleWrap>
            </TopMaskWrap>

            <FormWrap>
              <Box sx={{ marginBottom: '16px' }}>
                <Typography
                  variant="bodyMobileHeadlineBody6Medium1418"
                  color="#86959e"
                  sx={{ textAlign: 'center' }}>
                  Введи почту с помощью которой был создан твой аккаунт и мы отправим тебе
                  инструкцию для восстановления пароля
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '10px', gap: '16px' }}>
                <RegistrationInput
                  placeholder="Введи свою почту"
                  onChange={(value) => {}}
                  variant={RegistrationInputVariant.Email}
                />
              </Box>
            </FormWrap>
            <Box sx={{ gap: '14px' }}>
              <PrimaryButton variant="defaultMedium" onClick={() => setChechEmailIsOpen(true)}>
                Получить код
              </PrimaryButton>
              <Typography variant="bodyMobileHeadlineBody3Medium1624">
                или{' '}
                <TextButton variant="blue" href="/sign-in">
                  войди
                </TextButton>{' '}
                в свой аккаунт
              </Typography>
            </Box>
          </PasswordRecoveryPageInner>
        </PasswordRecoveryPageWrap>
      )}

      <PopUp isOpen={chechEmailIsOpen} iconVariant="Checkmark">
        <Box sx={{ gap: '2px', marginBottom: '20px' }}>
          <Typography variant="headlineMobileHeadline4Bold2028">Проверь свою почту</Typography>
          <Typography
            variant="bodyMobileHeadlineBody6Medium1418"
            color="#86959e"
            sx={{ textAlign: 'center' }}>
            Мы отправили тебе код, который нужно ввести здесь, чтобы подтвердить смену пароля
          </Typography>
        </Box>

        <Box>
          <Box sx={{ gap: '8px', marginBottom: '2px' }}>
            <CodeInput codeLength={4} onCodeComplete={(code) => true} />
            <Typography variant="bodyMobileHeadlineBody10Regular1220">
              Отправить код повторно
            </Typography>
          </Box>
          <CountDown seconds={60} variant="bodyMobileHeadlineBody1Bold1620" />
        </Box>

        <Divider />

        <SecondaryButton variant="whiteOutlined148px" onClick={() => setChechEmailIsOpen(false)}>
          Закрыть
        </SecondaryButton>
      </PopUp>

      <PopUp isOpen={passwordWasChangedIsOpen} iconVariant="Checkmark">
        <Box sx={{ gap: '2px', marginBottom: '20px' }}>
          <Typography variant="headlineMobileHeadline4Bold2028">Твой пароль был изменен</Typography>
          <Typography
            variant="bodyMobileHeadlineBody6Medium1418"
            color="#86959e"
            sx={{ textAlign: 'center' }}>
            Теперь ты можешь перейти на экран входа и войти в свой аккаунт с новым паролем
          </Typography>
        </Box>

        <Divider />

        <Box sx={{ flexDirection: 'row', justifyContent: 'center', gap: '16px' }}>
          <PrimaryButton variant="defaultMedium">Войти в аккаунт</PrimaryButton>
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
