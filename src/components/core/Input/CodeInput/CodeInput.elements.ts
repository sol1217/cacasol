import styled from 'styled-components'

export const CodeInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.palette.validation.error};
`

export const CodeInputCellsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

export const CodeInputCell = styled.input`
  width: 40px;
  height: 48px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.palette.input.registration.code.strokeDefault};
  background-color: ${({ theme }) => theme.palette.input.registration.code.backgroundDefault};
  text-align: center;
  pointer-events: none;

  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    background-color: ${({ theme }) => theme.palette.input.registration.code.backgroundPress};
    border-color: ${({ theme }) => theme.palette.input.registration.code.strokePress};
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`
