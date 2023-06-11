import styled from 'styled-components'

export const BasicInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 329px;
  height: 54px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.palette.input.basic.strokeDefault};
  background-color: ${({ theme }) => theme.palette.input.basic.backgroundDefault};
  position: relative;

  &:focus-within {
    border-color: ${({ theme }) => theme.palette.input.basic.strokePress};
  }
`

export const BasicInputContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 15px;
  width: 100%;
`

export const StyledBasicInput = styled.input`
  overflow: hidden;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.input.basic.textEntered};
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
    color: ${({ theme }) => theme.palette.input.basic.textDefault};
  }
`
