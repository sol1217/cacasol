import React, { useRef, useEffect, useState } from 'react'

import {
  LockIcon,
  LetterIcon,
  Typography,
  ContactIcon,
  HidePasswordIcon,
  ShowPasswordIcon,
} from '@core'

import {
  RegistrationInputWrap,
  StyledRegistrationInput,
  RegistrationInputContent,
  RegistrationInputIconWrap,
  RegistrationInputContainer,
  RegistrationInputPasswordVisibilityButton,
} from './RegistrationInput.elements'
import { RegistrationInputProps, RegistrationInputVariant } from './RegistrationInput.types'

export const RegistrationInput = ({ variant, placeholder, onChange }: RegistrationInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputWrapRef = useRef<HTMLDivElement>(null)
  const inputValue = useRef('')

  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [messageErrorText, setMessageErrorText] = useState('')

  useEffect(() => {
    focusToEnd()
  }, [isPasswordVisible])

  const generateIcon = (variant: RegistrationInputVariant) => {
    switch (variant) {
      case RegistrationInputVariant.Email:
        return <LetterIcon isPressed={isFocused} />
      case RegistrationInputVariant.Nickname:
        return <ContactIcon isPressed={isFocused} />
      case RegistrationInputVariant.Password:
        return <LockIcon isPressed={isFocused} />
    }
  }

  const onInputCompleteHandler = (inputValue: string) => {
    console.log('inputValue >>', inputValue)
  }

  const onClickHandler = () => {
    focusToEnd()
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.current = e.target.value
    onChange(inputValue.current)
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onInputCompleteHandler(inputValue.current)
    }
  }

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = ''
    setIsFocused(true)
    if (messageErrorText !== '') setMessageErrorText('')
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      if (
        variant !== RegistrationInputVariant.Password ||
        e.relatedTarget !== e.target.parentElement?.nextElementSibling
      ) {
        e.target.placeholder = placeholder
        setIsFocused(false)
      }
    } else {
      onInputCompleteHandler(inputValue.current)
    }
  }

  const focusToEnd = () => {
    const end = inputRef.current?.value.length
    if (end) {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(end, end)
    }
  }

  const onPasswordVisibilityClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsPasswordVisible(!isPasswordVisible)
  }

  const configureInputType = (variant: RegistrationInputVariant, isPasswordVisible: boolean) => {
    switch (variant) {
      case RegistrationInputVariant.Password:
        return isPasswordVisible ? 'text' : 'password'
      default:
        return 'text'
    }
  }
  return (
    <RegistrationInputContainer>
      <RegistrationInputWrap
        ref={inputWrapRef}
        onClick={onClickHandler}
        $isFocused={isFocused}
        className="registration-input">
        <RegistrationInputIconWrap>{generateIcon(variant)}</RegistrationInputIconWrap>
        <RegistrationInputContent>
          {isFocused && (
            <Typography variant="inputMobileInputsText2Medium1624" color="#86959e">
              {placeholder}
            </Typography>
          )}
          <StyledRegistrationInput
            ref={inputRef}
            type={configureInputType(variant, isPasswordVisible)}
            onChange={(e) => onChangeHandler(e)}
            onKeyDown={(e) => onKeyDownHandler(e)}
            placeholder={placeholder}
            onFocus={(e) => onFocusHandler(e)}
            onBlur={(e) => onBlurHandler(e)}
          />
        </RegistrationInputContent>
        {variant === RegistrationInputVariant.Password && (
          <RegistrationInputPasswordVisibilityButton
            onClick={(e) => onPasswordVisibilityClickHandler(e)}>
            {isPasswordVisible ? (
              <HidePasswordIcon isPressed={isFocused} />
            ) : (
              <ShowPasswordIcon isPressed={isFocused} />
            )}
          </RegistrationInputPasswordVisibilityButton>
        )}
      </RegistrationInputWrap>
      <Typography variant="bodyMobileHeadlineBody9Medium1218" color="red">
        {messageErrorText}
      </Typography>
    </RegistrationInputContainer>
  )
}
