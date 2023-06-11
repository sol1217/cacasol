import styled from 'styled-components'

import { WalletIcon } from '@core'

export const ProfileBalanceWrap = styled.div`
  background: ${({ theme }) => theme.palette.header.profile.buttonBackground};
  border-radius: 12px;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;

  &:hover svg path {
    transition: all ${({ theme }) => theme.transition.fast} ease;
    fill: ${({ theme }) => theme.palette.header.profile.primary};
  }
`

export const VerticalLine = styled.div`
  width: 1px;
  height: 26px;
  border-left: 1px solid ${({ theme }) => theme.palette.header.profile.background};
  transition: all ${({ theme }) => theme.transition.fast} ease;

  ${ProfileBalanceWrap}:hover & {
    border-color: ${({ theme }) => theme.palette.header.profile.activeItem};
  }
`
