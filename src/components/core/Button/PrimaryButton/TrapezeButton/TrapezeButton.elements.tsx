import Image from 'next/image'
import styled, { css } from 'styled-components'

import { PrimaryButtonVariant } from '../PrimaryButton.types'

export const TrapezeButtonWrap = styled.div<{
  $variant: PrimaryButtonVariant
  $isDisabled: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  height: 64px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  user-select: none;

  &::after {
    content: '';
    width: 70%;
    height: 40%;
    background: ${({ theme }) => theme.palette.button.primary.trapeze.glow};
    opacity: 0.75;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(17px);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
    transition: all 0.3s ease;
  }

  &:hover {
    &::after {
      opacity: 0;
    }
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'trapezeSmall':
        return css`
          transform: scale(0.65);
        `
      default:
        return undefined
    }
  }};

  ${({ $isDisabled }) => {
    if (!$isDisabled) return undefined

    return css`
      pointer-events: none;

      ${TrapezeButtonMiddle} {
        background: ${({ theme }) => theme.palette.button.primary.trapeze.disabled};

        &::before,
        &::after {
          display: none;
        }
      }

      svg path {
        fill: ${({ theme }) => theme.palette.button.primary.trapeze.disabled};
      }

      &::before,
      &::after {
        display: none;
      }
    `
  }};
`

export const TrapezeButtonTypographyWrap = styled.div<{ $isDisabled: boolean }>`
  pointer-events: none;
  z-index: 2;
  color: ${({ $isDisabled }) => ($isDisabled ? '#86959e' : 'white')};
  white-space: nowrap;
`

export const TrapezeButtonMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.button.primary.trapeze.pressBackground};
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    top: 4px;
    left: 0;
    background: rgba(255, 155, 113, 1);
    z-index: 3;
  }

  &::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(255, 155, 113, 0.53);
    z-index: 3;
  }
`
