import styled, { css } from 'styled-components'

import { breakpoints } from '@styles/breakpoints'

import { HeaderVariant } from './Header.types'

export const HeaderWrap = styled.div<{ $variant: HeaderVariant }>`
  background: transparent;
  border-radius: 0 0 15px 15px;
  position: relative;
  height: 88px;
  z-index: 10000;
  margin-bottom: -88px;
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;

  ${({ $variant }) => {
    if ($variant === 'home') {
      return css`
        padding: 32px 28px 16px 28px;
      `
    }

    if ($variant === 'auth') {
      return css`
        background: #fff;
      `
    }

    return css`
      padding: 16px 12px;
    `
  }}

  @media screen and (min-width: ${breakpoints.laptop}) {
    height: 100px;
    background: ${({ theme }) => theme.palette.header.background};
    margin-bottom: unset;
    padding: 0 70px;
    align-items: center;
    border-radius: 0px 0px 24px 24px;
    justify-content: space-between;
  }
`

export const HeaderSide = styled.div`
  display: none;
  align-items: center;
  height: 100%;

  @media screen and (min-width: ${breakpoints.laptop}) {
    display: flex;
    gap: 30px;

    &:first-child {
      gap: 70px;
    }
  }
`
