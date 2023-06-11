import styled, { css } from 'styled-components'

import { TabsProps } from './Tabs.types'

export const TabsWrap = styled.div<{ $variant: TabsProps['variant'] }>`
  display: flex;
  width: fit-content;

  ${({ $variant, theme }) => {
    if ($variant === 'v1')
      return css`
        border-bottom: 1px solid ${theme.palette.tabBar['10'].strokeDefault};
      `

    if ($variant === 'v2')
      return css`
        padding: 3px;
        background-color: ${theme.palette.tabBar['20'].strokeDefault};
        border-radius: 20px;
      `
  }}
`

export const Tab = styled.div<{ $isActive: boolean; $variant: TabsProps['variant'] }>`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  ${({ $variant, $isActive, theme }) => {
    if ($variant === 'v1')
      return css`
        color: ${$isActive
          ? theme.palette.tabBar['10'].textSelect
          : theme.palette.tabBar['10'].textDefault};
        height: 26px;
        padding: 0 30px;
        position: relative;
        top: 2px;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background-color: transparent;
          transition: all 0.2s;
        }

        ${$isActive
          ? css`
              &:after {
                background-color: #ff6b3d;
              }
            `
          : null}
      `

    if ($variant === 'v2')
      return css`
        background-color: ${$isActive
          ? theme.palette.tabBar['20'].backgroundSelect
          : theme.palette.tabBar['20'].backgroundDefault};
        color: ${$isActive ? '#FF6B3D' : '#86959E'};
        font-weight: ${$isActive ? 700 : 500};
        padding: 0 20px;
        border-radius: 17px;
        height: 34px;
      `
  }}
`
