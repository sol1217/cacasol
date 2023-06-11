import styled from 'styled-components'

import { mixins } from '@styles/mixins'

export const PlayerCardWrap = styled.div`
  height: 64px;
  background-color: #eef5f9;
  border-radius: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  overflow: hidden;
`

export const AvatarWrap = styled.div`
  width: 44px;
  height: 44px;
  border: 1.5px solid #d4dee3;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 12px;

  ${mixins.flex.center}
`

export const CoinWrap = styled.div`
  margin-left: 6px;
  width: 16px;
  height: 16px;

  ${mixins.flex.center}
`

export const DecorMaskWrap = styled.div<{ $backdropColor: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 58px;
  padding: 0 10px;

  ${mixins.flex.center}

  & > svg {
    position: absolute;
    left: 0;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: calc(100% - 21px);
    background-color: ${({ $backdropColor }) => $backdropColor};
  }
`

export const StatisticWrap = styled.div`
  position: relative;
  display: flex;
  gap: 3px;
  z-index: 2;
`
