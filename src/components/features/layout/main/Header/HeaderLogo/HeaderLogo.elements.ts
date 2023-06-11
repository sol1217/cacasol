import styled, { css, CSSObject } from 'styled-components'

export const HeaderLogoWrap = styled.div<{ sx: CSSObject }>`
  ${({ sx }) => css(sx)}
`
