import React, { useRef } from 'react'

import { BasicInputWrap, StyledBasicInput, BasicInputContent } from './BasicInput.elements'
import { BasicInputProps } from './BasicInput.types'

export const BasicInput = ({ placeholder, onInputComplete }: BasicInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputValue = useRef('')

  const onClickHandler = () => {
    inputRef.current?.focus()
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.current = e.target.value
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onInputComplete(inputValue.current)
    }
  }

  return (
    <BasicInputWrap onClick={onClickHandler}>
      <BasicInputContent>
        <StyledBasicInput
          ref={inputRef}
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => onKeyDownHandler(e)}
          placeholder={placeholder}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = placeholder)}
        />
      </BasicInputContent>
    </BasicInputWrap>
  )
}
