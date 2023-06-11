import styled, { css } from 'styled-components'

import { PrimaryButtonVariant } from './PrimaryButton.types'

export const PrimaryButtonWrap = styled.div`
  position: relative;
  background: none;
  overflow: hidden;
`

export const RectangularButton = styled.button<{
  $variant: PrimaryButtonVariant
  $isDisabled: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.palette.button.primary.basic.text};
  background: ${({ theme }) => theme.palette.button.primary.basic.default};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition.default} ease, color 0s;
  white-space: nowrap;

  ${({ $variant }) => {
    switch ($variant) {
      case 'defaultBig':
        return css`
          padding: 15px 32px;
          border-radius: 16px;
        `
      case 'chatBig':
        return css`
          width: 100%;
          padding: 15px 32px;
          border-radius: 16px;
        `

      case 'defaultMedium':
        return css`
          padding: 13px 20px;
          border-radius: 16px;
        `

      default:
        return css`
          padding: 10px 24px;
          border-radius: 14px;
        `
    }
  }};

  &:active {
    background: ${({ theme }) => theme.palette.button.primary.basic.press};

    &::before,
    &::after {
      opacity: 0;
    }
  }

  ${({ $isDisabled }) => {
    if ($isDisabled) {
      return css`
        color: ${({ theme }) => theme.palette.button.primary.basic.textDisabled};
        background: ${({ theme }) => theme.palette.button.primary.basic.disabled};

        &:active {
          background: ${({ theme }) => theme.palette.button.primary.basic.disabled};
        }

        &::before,
        &::after {
          display: none;
        }
      `
    }

    return undefined
  }};

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 110%;
    background: ${({ theme }) => theme.palette.button.primary.basic.light};
    opacity: 0.5;
    border-radius: 50%;
    position: absolute;
    mix-blend-mode: soft-light;
    pointer-events: none;
  }

  &::before {
    top: -20%;
    left: -20%;
  }

  &::after {
    bottom: -20%;
    right: -20%;
  }
`
