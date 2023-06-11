import styled from 'styled-components'

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 9px 20px;
  background: ${({ theme }) => theme.palette.header.profile.background};
  gap: 24px;
`
