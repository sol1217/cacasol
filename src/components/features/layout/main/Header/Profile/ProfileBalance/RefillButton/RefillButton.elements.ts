import styled from 'styled-components'

export const RefillButtonWrap = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.palette.header.profile.activeItem};
  cursor: pointer;
`
