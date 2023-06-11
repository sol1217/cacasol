import React, { useRef, useState } from 'react'
import _ from 'lodash'

import { Typography } from '@core'

import { CodeInputCell, CodeInputWrap, CodeInputCellsWrap } from './CodeInput.elements'
import { focusStyles, defaultStyles } from './CodeInput.styles'
import { CodeInputProps } from './CodeInput.types'

export const CodeInput = ({ codeLength = 4, onCodeComplete }: CodeInputProps) => {
  const code = useRef<string>('')
  const cellRefs = useRef<Array<HTMLInputElement>>([])
  const [isErrorMassageVisible, setIsErrorMassageVisible] = useState<boolean>(false)

  const updateCode = (mode: 'add' | 'subtract', digit: string) => {
    mode === 'add' ? (code.current += digit) : (code.current = code.current.slice(0, -1))
  }

  const onCodeCompleteHandler = (cell: HTMLInputElement) => {
    updateCode('add', cell.value)
    changeStyles('focused', cell)
    if (!onCodeComplete(code.current)) setIsErrorMassageVisible(true)
  }

  const changeStyles = (variant: 'default' | 'focused', cell: HTMLInputElement) => {
    variant === 'default' && cell
      ? (cell.style.cssText = defaultStyles)
      : (cell.style.cssText = focusStyles)
  }

  const refreshInput = () => {
    code.current = ''
    cellRefs.current?.map((cell) => {
      if (cell !== null) {
        cell.value = ''
        if (cell !== cellRefs.current?.at(0)) changeStyles('default', cell)
      }
    })
    setIsErrorMassageVisible(false)
  }

  const focusOnFirstCell = () => {
    if (code) refreshInput()
    cellRefs.current?.at(0)?.focus()
  }

  const focusOnNextCell = (cell: HTMLInputElement, nextCell: HTMLInputElement) => {
    updateCode('add', cell.value)
    changeStyles('focused', cell)
    nextCell.focus()
  }
  const focusOnPreviousCell = (cell: HTMLInputElement, previousCell: HTMLInputElement) => {
    updateCode('subtract', cell.value)
    changeStyles('default', cell)
    previousCell?.focus()
  }

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cell = e.target
    const cellValue = cell.value
    const nextCell = cell.nextElementSibling as HTMLInputElement

    if (cellValue != '')
      nextCell === null ? onCodeCompleteHandler(cell) : focusOnNextCell(cell, nextCell)
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const cell = e.target as HTMLInputElement
    const insertedValue = e.key
    const cellValue = cell.value
    const previousCell = cell.previousElementSibling as HTMLInputElement

    if (
      !(insertedValue === 'Backspace') &&
      (!RegExp('[0-9]').test(insertedValue) || cell.value !== '')
    ) {
      e.preventDefault()
      return
    }

    if (insertedValue === 'Backspace')
      cellValue !== '' ? updateCode('subtract', cellValue) : focusOnPreviousCell(cell, previousCell)
  }

  return (
    <CodeInputWrap>
      <CodeInputCellsWrap onClick={focusOnFirstCell}>
        {_.range(codeLength).map((index) => (
          <CodeInputCell
            key={index}
            ref={(cellRef) => cellRefs.current.push(cellRef as HTMLInputElement)}
            type="number"
            inputMode="numeric"
            onKeyDown={onKeyDownHandler}
            onChange={(e) => inputOnChange(e)}
          />
        ))}
      </CodeInputCellsWrap>
      {isErrorMassageVisible && (
        <Typography variant="inputMobileInputsText2Medium1624">Неверный код</Typography>
      )}
    </CodeInputWrap>
  )
}
