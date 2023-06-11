import styled from 'styled-components'

export const AmountInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 329px;
  height: 54px;
  border: 1.5px solid ${({ theme }) => theme.palette.input.wallet.amount.strokeDefault};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.input.wallet.amount.backgroundDefault};
  position: relative;

  &:focus-within {
    border: 1.5px solid ${({ theme }) => theme.palette.input.wallet.amount.strokePress};
  }
`

export const AmountInputContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 25px 15px;
  width: 100%;
`

export const StyledAmountInput = styled.input`
  overflow: hidden;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.input.wallet.amount.textTyping};
  background: none;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  width: 100%;
  height: 100%;
  transition: 0.2s ease-out;
`

export const AmountInputPromocodeHolder = styled.div`
  position: absolute;
  top: 2.5px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 46px;
  border-radius: 0 12px 12px 0;
  background: ${({ theme }) => theme.palette.input.wallet.amount.backgroundShapeEntered};
  color: ${({ theme }) => theme.palette.input.wallet.amount.textPromocodeEntered};
  padding: 6px 10px;
`
