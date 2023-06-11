import styled, { css, CSSObject } from 'styled-components'

export const StyledComponent = styled.span<{ styles: CSSObject; $wrap?: boolean }>`
  ${({ styles, $wrap }) => css`
    ${styles};
    word-break: ${$wrap && 'break-word'};
    display: inline-block;
  `}
`
