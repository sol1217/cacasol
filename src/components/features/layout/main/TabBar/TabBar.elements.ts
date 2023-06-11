import styled from 'styled-components'

import { breakpoints } from '@styles/breakpoints'
import { colors } from '@styles/colors'
import { gradients } from '@styles/gradients'

export const TabBarWrap = styled.div`
  position: relative;
  width: calc(100% - 24px);
  height: 109px;

  @media screen and (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`

export const TabBarItemWrap = styled.div<{ $tabLeftPosition: number; $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 41px;
  gap: 2px;
  z-index: 1;
  position: absolute;
  top: -12px;
  left: ${({ $tabLeftPosition }) => $tabLeftPosition}%;
  color: ${({ $isActive }) => ($isActive ? colors.darkOrange : colors.dustyBlue)};
`

export const TabBarUserIconWrap = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.pearl};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-top: 2px;

  &:before {
    content: '';
    position: absolute;
    height: 44px;
    width: 44px;
    top: 0;
    right: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: ${({ $isActive }) => ($isActive ? gradients.sunrise : gradients.polar)};
  }
`

export const BackButtonWrap = styled.div`
  position: absolute;
  top: -38px;
  left: 14px;
`

export const UpButtonWrap = styled.div`
  position: absolute;
  top: -38px;
  right: 14px;

  @media screen and (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`
