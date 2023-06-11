import styled, { css } from 'styled-components'

export const PromocodeCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 329px;
  height: 54px;
  background: ${({ theme }) => theme.palette.input.wallet.promocode.backgroundDefault};
  border: 2px dashed ${({ theme }) => theme.palette.input.wallet.promocode.strokeDefault};
  border-radius: 16px;
  color: ${({ theme }) => theme.palette.input.wallet.promocode.textDefault};
`

export const PromocodeInputElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PromocodeInputElementWrap = styled.div<{ $isErrorVisible: boolean }>`
  display: flex;
  align-items: center;
  width: 329px;
  height: 54px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.palette.input.wallet.promocode.strokeEntered};
  background-color: ${({ theme }) => theme.palette.input.wallet.promocode.backgroundEntered};
  position: relative;
  padding-right: 20px;

  ${({ $isErrorVisible }) =>
    $isErrorVisible
      ? css`
          border-color: ${({ theme }) => theme.palette.validation.error};
        `
      : css`
          border-color: ${({ theme }) => theme.palette.input.wallet.promocode.strokeEntered};
          &:focus-within {
            border-color: ${({ theme }) => theme.palette.input.wallet.promocode.strokePress};
          }
        `}
`

export const PromocodeInputElementContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 15px;
  width: 100%;
`

export const StyledPromocodeInputElement = styled.input`
  overflow: hidden;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.input.wallet.promocode.textEntered};
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
    color: ${({ theme }) => theme.palette.input.wallet.promocode.textDefault};
  }
`
