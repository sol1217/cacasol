import { css } from 'styled-components'

export const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    columnCenter: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  },
}
