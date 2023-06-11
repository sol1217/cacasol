import styled, { css } from 'styled-components'

import { SearchInputColorVariant } from './SearchInput.types'

export const SearchInputWrap = styled.div<{ $colorVariant: SearchInputColorVariant }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 100px;
  background-color: ${({ $colorVariant, theme }) =>
    theme.palette.input.search[$colorVariant].backgroundDefault};
  position: relative;
  padding-right: 24px;
  border: 1.5px solid
    ${({ $colorVariant, theme }) => theme.palette.input.search[$colorVariant].backgroundDefault};
  transition: border ${({ theme }) => theme.transition.default};

  &:focus-within {
    border-color: ${({ $colorVariant, theme }) =>
      theme.palette.input.search[$colorVariant].strokePress};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 25px 15px;
  width: 100%;
`

export const StyledInput = styled.input<{ $colorVariant: SearchInputColorVariant }>`
  overflow: hidden;
  border: none;
  outline: none;
  color: ${({ $colorVariant, theme }) => theme.palette.input.search[$colorVariant].textEntered};
  background: none;
  font-family: 'Gilroy', sans-serif;
  line-height: 24px;
  letter-spacing: 0.2px;
  width: 100%;
  height: 100%;
  transition: 0.2s ease-out;

  &::placeholder {
    color: ${({ $colorVariant, theme }) => theme.palette.input.search[$colorVariant].textDefault};
    padding-left: 3px;
  }

  font-weight: ${({ $colorVariant }) => ($colorVariant === 'light' ? 500 : 400)};
  font-size: ${({ $colorVariant }) => ($colorVariant === 'light' ? 16 : 14)}px;
`

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  width: 12px;
  height: 16px;

  &:hover {
    cursor: pointer;
  }
`

export const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  width: 12px;
  height: 16px;
`
