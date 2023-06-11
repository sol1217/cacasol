import { css } from 'styled-components'

import { defaultTheme } from '@styles'

import { TextButtonVariants } from './TextButton.types'

export const textButtonVariants: TextButtonVariants = {
  blue: {
    mainStyles: css`
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      display: inline;

      color: ${defaultTheme.palette.button.text.blue.default};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.blue.press};
      }
    `,
  },
  orange: {
    mainStyles: css`
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      display: inline;

      color: #ff6b3d;
    `,
    pressedStyles: css`
      &:active {
        color: #f15f30;
      }
    `,
  },
  orangeUnderlined12px: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 12px;
      font-weight: 700;
      line-height: 13px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.underlined.default};
      border-bottom: 1px solid ${defaultTheme.palette.button.text.orange.underlined.default};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.orange.underlined.press};
        border-bottom-color: ${defaultTheme.palette.button.text.orange.underlined.press};
      }
    `,
    disabledStyles: css`
      color: ${defaultTheme.palette.button.text.orange.underlined.disabled};
      border-bottom-color: ${defaultTheme.palette.button.text.orange.underlined.disabled};
    `,
  },
  orangeUnderlined14px: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.underlined.default};
      border-bottom: 1px solid ${defaultTheme.palette.button.text.orange.underlined.default};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.orange.underlined.press};
        border-bottom-color: ${defaultTheme.palette.button.text.orange.underlined.press};
      }
    `,
    disabledStyles: css`
      color: ${defaultTheme.palette.button.text.orange.underlined.disabled};
      border-bottom-color: ${defaultTheme.palette.button.text.orange.underlined.disabled};
    `,
  },
  navigation: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.navigation.default};

      .secondary-button-arrow {
        border-color: ${defaultTheme.palette.button.text.orange.navigation.default};
      }
    `,
    pressedStyles: css`
      &:active {
        .secondary-button-arrow {
          border-color: ${defaultTheme.palette.button.text.orange.navigation.press};
        }
        color: ${defaultTheme.palette.button.text.orange.navigation.press};
      }
    `,
  },
  viewAllArrowDown: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.viewAll.default};

      .text-button-icon {
        background: ${defaultTheme.palette.button.text.orange.viewAll.circleDefault};
      }
      .text-button-icon-arrow {
        fill: ${defaultTheme.palette.button.text.orange.viewAll.arrowDefault};
      }
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.orange.viewAll.textPress};

        .text-button-icon {
          background: ${defaultTheme.palette.button.text.orange.viewAll.circlePress};
        }
        .text-button-icon-arrow {
          fill: ${defaultTheme.palette.button.text.orange.viewAll.arrowPress};
        }
      }
    `,
    disabledStyles: css`
      color: ${defaultTheme.palette.button.text.orange.viewAll.textDisabled};

      .text-button-icon {
        background: ${defaultTheme.palette.button.text.orange.viewAll.circleDisabled};
      }
      .text-button-icon-arrow {
        fill: ${defaultTheme.palette.button.text.orange.viewAll.arrowDisabled};
      }
    `,
  },
  black: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.black.default};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.orange.black.press};
      }
    `,
  },
  viewAllArrowRight: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.viewAll30.textDefault};

      .text-button-icon {
        background: ${defaultTheme.palette.button.text.orange.viewAll30.circleDefault};
        transform: rotate(-90deg);
      }
      .text-button-icon-arrow {
        fill: ${defaultTheme.palette.button.text.orange.viewAll30.arrowDefault};
      }
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.orange.viewAll30.textPress};

        .text-button-icon {
          background: ${defaultTheme.palette.button.text.orange.viewAll30.circlePress};
        }
        .text-button-icon-arrow {
          fill: ${defaultTheme.palette.button.text.orange.viewAll30.arrowPress};
        }
      }
    `,
  },
  grey: {
    mainStyles: css`
      font-family: Gilroy, sans-serif;
      font-size: 10px;
      font-weight: 700;
      line-height: 11px;
      letter-spacing: 0;

      color: ${defaultTheme.palette.button.text.orange.grey.default};
      border-bottom: 1px solid ${defaultTheme.palette.button.text.orange.grey.default};
    `,
    pressedStyles: css`
      &:active {
        color: ${defaultTheme.palette.button.text.orange.grey.press};
        border-bottom-color: ${defaultTheme.palette.button.text.orange.grey.press};
      }
    `,
  },
}
