import React, { useRef, useState } from 'react'

import { Typography } from '@core'

import { PromocodeInputTextButtonVariant } from './PromocodeInputTextButton/PromocodeInputTextButton.types'
import {
  PromocodeCover,
  PromocodeInputElementWrap,
  StyledPromocodeInputElement,
  PromocodeInputElementContent,
  PromocodeInputElementContainer,
} from './PromocodeInput.elements'
import { PromocodeInputProps } from './PromocodeInput.types'
import { PromocodeInputCard } from './PromocodeInputCard'
import { PromocodeInputTextButton } from './PromocodeInputTextButton'

export const PromocodeInput = ({ applyPromocodeHandler }: PromocodeInputProps) => {
  const promocodeValue = useRef(0)
  const promocode = useRef<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const [isInitialStage, setIsInitialStage] = useState(true)
  const [isPromocodeAppliedStage, setIsPromocodeAppliedStage] = useState(false)
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false)
  const [isTextButtonVisible, setIsTextButtonVisible] = useState(false)

  const onClickHandler = () => {
    inputRef.current?.focus()
    setIsTextButtonVisible(true)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    promocode.current = e.target.value
  }

  const onApplyPromocodeClickHandler = () => {
    const result = applyPromocodeHandler(promocode.current)

    if (result.status === 'success') {
      promocodeValue.current = result.promocodeValue
      setIsPromocodeAppliedStage(true)
    } else {
      setIsErrorMessageVisible(true)
    }
  }

  const onClearPromocodeClickHandler = () => {
    setIsErrorMessageVisible(false)

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const onChangePromocodeButtonHandler = () => {
    setIsTextButtonVisible(false)
    setIsPromocodeAppliedStage(false)
  }

  const onPromocodeCoverClickHandler = () => {
    setIsInitialStage(false)
  }

  return (
    <>
      {isPromocodeAppliedStage ? (
        <PromocodeInputCard
          promocodeValue={promocodeValue.current}
          onChangeButtonClick={onChangePromocodeButtonHandler}
        />
      ) : isInitialStage ? (
        <PromocodeCover onClick={onPromocodeCoverClickHandler}>
          <Typography>Твой промокод</Typography>
        </PromocodeCover>
      ) : (
        <PromocodeInputElementContainer>
          <PromocodeInputElementWrap
            $isErrorVisible={isErrorMessageVisible}
            onClick={onClickHandler}>
            <PromocodeInputElementContent>
              <StyledPromocodeInputElement
                ref={inputRef}
                onChange={(e) => onChangeHandler(e)}
                placeholder="Введите ваш промокод"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Введите ваш промокод')}
              />
            </PromocodeInputElementContent>
            {isTextButtonVisible ? (
              <PromocodeInputTextButton
                variant={
                  isErrorMessageVisible
                    ? PromocodeInputTextButtonVariant.Clear
                    : PromocodeInputTextButtonVariant.Apply
                }
                onClick={
                  isErrorMessageVisible
                    ? onClearPromocodeClickHandler
                    : onApplyPromocodeClickHandler
                }
              />
            ) : null}
          </PromocodeInputElementWrap>
          {isErrorMessageVisible ? (
            <Typography variant="bodyMobileHeadlineBody9Medium1218" color="red">
              Промокод не найден
            </Typography>
          ) : null}
        </PromocodeInputElementContainer>
      )}
    </>
  )
}
