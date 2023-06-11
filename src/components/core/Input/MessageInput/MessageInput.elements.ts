import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

import { defaultTheme } from '@styles'

export const MessageInputWrap = styled.div`
  display: flex;
  width: 369px;
  border-radius: 16px;
  background-color: ${defaultTheme.palette.input.message.backgroundDefault};
`

export const MessageInputContent = styled.div`
  display: flex;
  gap: 68px;
  margin: 20px 16px 20px 20px;
  width: 321px;
  align-items: center;
  justify-content: space-between;
`

export const StyledMessageInput = styled(TextareaAutosize)`
  border: none;
  outline: none;
  color: ${defaultTheme.palette.input.message.textEntered};
  background: none;
  width: 236px;
  transition: 0.2s ease-out;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;

  &::placeholder {
    color: ${defaultTheme.palette.input.message.textDefault};
  }

  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
