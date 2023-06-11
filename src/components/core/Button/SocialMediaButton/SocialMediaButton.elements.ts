import styled from 'styled-components'

export const SocialMediaButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  min-height: 46px;
  background: ${({ theme }) => theme.palette.button.socialMedia.backgroundDefault};
  border-radius: 50px;
  border: 1.5px solid ${({ theme }) => theme.palette.button.socialMedia.strokeDefault};
  &:active {
    border-color: ${({ theme }) => theme.palette.button.socialMedia.strokePress};
  }
`
