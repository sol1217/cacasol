import styled from 'styled-components'

export const ReturnButtonWrap = styled.button`
  border: none;
  width: 56px;
  min-height: 56px;
  border-radius: 100px;
  background: ${({ theme }) => theme.palette.button.return.backgroundDefault};

  &:active {
    background: ${({ theme }) => theme.palette.button.return.backgroundPress};
  }
`
