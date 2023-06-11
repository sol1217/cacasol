import React, { useRef, useState } from 'react'

import { Box, Typography } from '@core'
import { defaultTheme } from '@styles'

import {
  AmountInputWrap,
  StyledAmountInput,
  AmountInputContent,
  AmountInputPromocodeHolder,
} from './AmountInput.elements'
import { AmountInputProps } from './AmountInput.types'

export const AmountInput = ({ promocode, onInputComplete }: AmountInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputValue = useRef<string>('')

  const [isPromocodeVisible, setIsPromocodeVisible] = useState(false)

  const onClickHandler = () => {
    requestAnimationFrame(() => {
      setIsPromocodeVisible(false)
      if (inputRef.current && inputRef.current?.value !== '') {
        inputRef.current.value = inputRef.current.value.slice(0, -2)
      }
    })

    inputRef.current?.focus()
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.current = e.target.value
  }

  const showTotalAmount = () => {
    if (promocode) {
      setIsPromocodeVisible(true)
    }
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    const insertedValue = e.key

    if (e.key === 'Enter' && input.value !== '') {
      showTotalAmount()
    } else if (!(insertedValue === 'Backspace' || RegExp('[0-9]').test(insertedValue))) {
      e.preventDefault()
      return
    }
  }

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => (e.target.placeholder = '')

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = 'Введите сумму'

    if (e.target.value !== '') {
      e.target.value += ' ₽'
      showTotalAmount()
      onInputComplete(Number(inputValue.current))
    }
  }

  const calculateTotalAmount = (promocode?: number, inputValue?: string) => {
    if (promocode && inputValue) {
      return promocode + Number(inputValue)
    } else return promocode || Number(inputValue)
  }

  return (
    <AmountInputWrap onClick={onClickHandler}>
      <AmountInputContent>
        <StyledAmountInput
          ref={inputRef}
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => {
            onKeyDownHandler(e)
          }}
          placeholder="Введите сумму"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => onBlurHandler(e)}
        />
      </AmountInputContent>
      {isPromocodeVisible && (
        <AmountInputPromocodeHolder>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography
              variant="bodyMobileHeadlineBody3Medium1624"
              color={defaultTheme.palette.input.wallet.amount.textPromocodeEntered}>
              {calculateTotalAmount(promocode, inputValue.current)}₽
            </Typography>
            <Typography
              variant="bodyMobileHeadlineBody9Medium1218"
              color={defaultTheme.palette.input.wallet.amount.textPromocodeEntered}>
              Сумма с промокодом
            </Typography>
          </Box>
        </AmountInputPromocodeHolder>
      )}
    </AmountInputWrap>
  )
}
