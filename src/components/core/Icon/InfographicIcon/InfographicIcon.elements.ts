import styled, { css } from 'styled-components'

export const InfographicIconWrap = styled.div<{
  $backgroundColor: string
  $outlineColor?: string
  $shape: 'rectangle' | 'circle'
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  ${({ $shape, $outlineColor }) =>
    $shape === 'rectangle'
      ? css`
          width: 44px;
          height: 44px;
          border-radius: 12px;
        `
      : css`
          width: 70px;
          height: 70px;
          border-radius: 50%;
          box-shadow: 0 0 0 4pt ${$outlineColor};
        `}
`
