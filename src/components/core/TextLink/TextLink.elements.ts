import styled from 'styled-components'

export const TextLinkWrap = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.palette.button.text.orange.link.default};

  &:active {
    color: ${({ theme }) => theme.palette.button.text.orange.link.press};
  }
`
