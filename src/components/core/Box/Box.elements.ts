import styled, { css, CSSObject } from 'styled-components'

export const StyledBox = styled.div<{ sx: CSSObject }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 0;
  width: 100%;
  ${({ sx }) => css(sx)}
`
