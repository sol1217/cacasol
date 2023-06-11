import {
  Box,
  TextButton,
  Typography,
  PrimaryButton,
  RegistrationInput,
  RegistrationInputVariant,
} from '@core'

import {
  FormWrap,
  TopMaskWrap,
  LoginPageWrap,
  LoginPageInner,
  SectionTitleWrap,
} from './SignInPage.elements'
import { SocialLinksIn } from './SocialLinksIn'
import { TopMask } from './TopMask'

export const SignInPage = () => {
  return (
    <LoginPageWrap>
      <LoginPageInner>
        <TopMaskWrap>
          <TopMask />
          <SectionTitleWrap>
            <Typography variant="headlineMobileHeadline3Bold2230" color="#ff6b3d">
              Войти
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
              placeholder="Введи никнейм или email"
              onChange={(value) => {}}
              variant={RegistrationInputVariant.Email}
            />
            <RegistrationInput
              placeholder="Введи свой пароль"
              onChange={(value) => {}}
              variant={RegistrationInputVariant.Password}
            />
          </Box>
          <Box sx={{ alignItems: 'flex-end' }}>
            <Typography variant="bodyMobileHeadlineBody3Medium1624">
              <TextButton variant="blue">Забыл пароль?</TextButton>
            </Typography>
          </Box>
        </FormWrap>
        <Box sx={{ gap: '14px' }}>
          <PrimaryButton variant="defaultMedium">Войти в аккаунт</PrimaryButton>
          <Typography variant="bodyMobileHeadlineBody3Medium1624">
            или{' '}
            <TextButton variant="blue" href="/sign-up">
              создай
            </TextButton>{' '}
            новый аккаунт
          </Typography>
        </Box>
      </LoginPageInner>
    </LoginPageWrap>
  )
}
