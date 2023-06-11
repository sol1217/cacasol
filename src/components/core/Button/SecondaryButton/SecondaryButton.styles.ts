import { css } from 'styled-components'

import { defaultTheme } from '@styles'

import { SecondaryButtonVariants } from './SecondaryButton.types'

export const secondaryButtonVariants: SecondaryButtonVariants = {
  whiteOutlinedGeneral: {
    mainStyles: css`
      min-height: 48px;
      padding: 0 32px;
      border-radius: 16px;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    `,
    defaultStyles: css`
      background-color: transparent;
      color: ${defaultTheme.palette.button.secondary.medium.textDefault};
      border: 2px solid ${defaultTheme.palette.button.secondary.medium.strokeDefault}};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.secondary.medium.textPress};
        border: 2px solid ${defaultTheme.palette.button.secondary.medium.strokePress};
      }
    `,
    disabledStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.medium.disabled};
      color: ${defaultTheme.palette.button.secondary.medium.textDisabled};
      border: transparent;
    `,
  },
  whiteOutlined148px: {
    mainStyles: css`
      min-height: 48px;
      width: 148px;
      border-radius: 16px;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    `,
    defaultStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.medium.default};
      color: ${defaultTheme.palette.button.secondary.medium.textDefault};
      outline: 2px solid ${defaultTheme.palette.button.secondary.medium.strokeDefault};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.secondary.medium.textPress};
        outline: 2px solid ${defaultTheme.palette.button.secondary.medium.strokePress};
      }
    `,
    disabledStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.medium.disabled};
      color: ${defaultTheme.palette.button.secondary.medium.textDisabled};
      outline: none;
    `,
  },
  blue: {
    mainStyles: css`
      width: fit-content;
      min-height: 42px;
      padding: 0 32px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    `,
    defaultStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.blue.default};
      color: ${defaultTheme.palette.button.secondary.blue.textDefault};
    `,
    pressedStyles: css`
      &:active {
        background-color: ${defaultTheme.palette.button.secondary.blue.press};
        color: ${defaultTheme.palette.button.secondary.blue.textPress};
      }
    `,
    disabledStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.blue.disabled};
      color: ${defaultTheme.palette.button.secondary.blue.textDisabled};
    `,
  },
  orange: {
    mainStyles: css`
      width: fit-content;
      min-height: 42px;
      padding: 0 32px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    `,
    defaultStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.medium.default};
      color: ${defaultTheme.palette.button.secondary.back.textDefault};
    `,
    pressedStyles: css`
      &:active {
        background-color: ${defaultTheme.palette.button.secondary.back.press};
        color: ${defaultTheme.palette.button.secondary.back.textPress};
      }
    `,
    disabledStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.blue.disabled};
      color: ${defaultTheme.palette.button.secondary.blue.textDisabled};
    `,
  },
  back: {
    mainStyles: css`
      min-height: 42px;
      width: 89px;
      border-radius: 100px;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
    `,
    defaultStyles: css`
      background-color: ${defaultTheme.palette.button.secondary.back.default};
      color: ${defaultTheme.palette.button.secondary.back.textDefault};
    `,
    pressedStyles: css`
      &:active {
        .secondary-button-arrow {
          border-color: ${defaultTheme.palette.button.secondary.back.textPress};
        }
        background-color: ${defaultTheme.palette.button.secondary.back.press};
        color: ${defaultTheme.palette.button.secondary.back.textPress};
      }
    `,
  },
}
