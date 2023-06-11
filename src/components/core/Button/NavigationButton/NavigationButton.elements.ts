import styled, { css } from 'styled-components'

import { NavigationButtonProps } from './NavigationButton.types'

export const NavigationButtonWrap = styled.button<{
  $size: NavigationButtonProps['size']
  $direction: NavigationButtonProps['direction']
  $disabled: NavigationButtonProps['disabled']
}>`
  border: 0 solid transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }

  ${({ $direction }) =>
    $direction === 'backward' &&
    css`
      transform: rotate(180deg);
    `}

  ${({ $size, $disabled }) =>
    $size === 'large' &&
    css`
      width: 32px;
      height: 32px;
      min-width: 32px;
      min-height: 32px;
      border-color: ${$disabled ? 'rgba(255, 255, 255, 0.2)' : '#fff'};
      color: ${$disabled ? 'rgba(255, 255, 255, 0.2)' : '#fff'};
      background-color: rgba(255, 255, 255, 0.2);
      border-width: 2px;

      &:active {
        color: ${$disabled ? 'rgba(255, 255, 255, 0.2)' : '#f15f30'};
        border-color: ${$disabled ? 'rgba(255, 255, 255, 0.2)' : '#f15f30'};
      }
    `}

  ${({ $size, $disabled }) =>
    $size === 'small' &&
    css`
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      border-color: ${$disabled ? '#cfd5d8' : '#86959e'};
      color: ${$disabled ? '#cfd5d8' : '#86959e'};
      background-color: white;
      border-width: 1px;

      &:active {
        color: ${$disabled ? '#cfd5d8' : '#f15f30'};
        border-color: ${$disabled ? '#cfd5d8' : '#f15f30'};
      }
    `}
`
