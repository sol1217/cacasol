import styled, { css } from 'styled-components'

export const RegistrationInputWrap = styled.div<{ $isFocused: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  width: 312px;
  height: 54px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.palette.input.registration.emailLogin.strokeDefault};
  background: ${({ theme }) => theme.palette.input.registration.emailLogin.backgroundDefault};

  ${({ $isFocused }) =>
    $isFocused
      ? css`
          background: ${({ theme }) => theme.palette.input.registration.emailLogin.backgroundPress};
          border: 1.5px solid
            ${({ theme }) => theme.palette.input.registration.emailLogin.strokePress};
        `
      : null}
`

export const RegistrationInputIconWrap = styled.div`
  min-height: 34px;
  min-width: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.input.registration.emailLogin.circleEntered};
  margin: 18px 10px;
`

export const RegistrationInputContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledRegistrationInput = styled.input`
  overflow: hidden;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.input.registration.emailLogin.textEntered};
  background: none;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  width: 100%;
  height: 100%;
  transition: 0.2s ease-out;

  &::placeholder {
    color: ${({ theme }) => theme.palette.input.registration.emailLogin.textDefault};
  }
`

export const RegistrationInputPasswordVisibilityButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background: none;
  margin-right: 18px;
`

export const RegistrationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
