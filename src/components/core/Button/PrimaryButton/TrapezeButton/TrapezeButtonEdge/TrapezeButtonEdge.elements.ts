import styled, { css } from 'styled-components'

export const TrapezeButtonEdgeWrap = styled.div<{ $reversed?: boolean }>`
  height: 100%;

  ${({ $reversed }) => {
    if (!$reversed) return undefined

    return css`
      transform: scaleX(-1);
    `
  }}

  svg {
    height: 100%;
  }
`
