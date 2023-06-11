import React, { useRef, useState } from 'react'
import Image from 'next/image'

import { SearchIcon } from '@core'
import closeIcon from '@assets/svg/search-input-close-icon.svg'

import {
  Content,
  ClearButton,
  LoadingWrap,
  StyledInput,
  SearchInputWrap,
} from './SearchInput.elements'
import { SearchInputProps } from './SearchInput.types'

export const SearchInput = ({
  value,
  placeholder,
  onChange,
  loading,
  colorVariant = 'light',
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isClearButtonVisible, setIsClearButtonVisible] = useState(false)

  const wrapOnClickHandler = () => {
    inputRef.current?.focus()
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const onBlurHandler = () => {
    if (value) {
      setIsClearButtonVisible(true)
    }
  }

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsClearButtonVisible(false)
  }

  const onClearButtonClickHandler = () => {
    onChange('')
  }

  return (
    <SearchInputWrap $colorVariant={colorVariant} onClick={wrapOnClickHandler}>
      <Content>
        <SearchIcon />
        <StyledInput
          value={value}
          $colorVariant={colorVariant}
          ref={inputRef}
          onChange={onChangeHandler}
          placeholder={placeholder}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </Content>
      {isClearButtonVisible && !loading && (
        <ClearButton onClick={onClearButtonClickHandler}>
          <Image src={closeIcon.src} width={12} height={12} alt="" />
        </ClearButton>
      )}
      {loading && (
        <LoadingWrap>
          <Image src={closeIcon.src} width={12} height={12} alt="" />
        </LoadingWrap>
      )}
    </SearchInputWrap>
  )
}
