import React, { useRef } from 'react'

import { MessageInputWrap, StyledMessageInput, MessageInputContent } from './MessageInput.elements'
import { MessageInputProps } from './MessageInput.types'
import { SendMessageButton } from './SendMessageButton'

export const MessageInput = ({ placeholder, onInputComplete }: MessageInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const inputValue = useRef<string>('')

  const onClickHandler = () => {
    inputRef.current?.focus()
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    inputValue.current = e.target.value
  }

  const sendMessageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    onInputComplete(inputValue.current)
  }

  return (
    <MessageInputWrap onClick={onClickHandler}>
      <MessageInputContent>
        <StyledMessageInput
          maxRows={2}
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeHandler(e)}
          placeholder={placeholder}
          onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => (e.target.placeholder = '')}
          onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
            (e.target.placeholder = placeholder)
          }
        />
        <SendMessageButton onClick={(e) => sendMessageHandler(e)} />
      </MessageInputContent>
    </MessageInputWrap>
  )
}
