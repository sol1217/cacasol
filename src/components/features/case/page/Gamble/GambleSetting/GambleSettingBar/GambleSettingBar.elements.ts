import styled, { css } from 'styled-components'

import { colors } from '@styles/colors'

export const GambleSettingBarWrap = styled.div<{ $color: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  width: 56px;
  border-radius: 16px;
  background-color: ${({ $color }) => $color};
  gap: 10px;
  padding: 12px 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

export const Tab = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 26px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 11px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: white;
      color: #ff6b3d;
    `}
`

export const CutOutElement = styled.div`
  position: absolute;
  bottom: 0;
  right: 7px;
  width: 26px;
  height: 3px;
  background: ${colors.darkOrange};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

export const InfoButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.2);
  height: 18px;
  width: 18px;
  border-radius: 50%;
  color: white;
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
`

export const Line = styled.div`
  width: 40px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const InfoCard = styled.div`
  position: absolute;
  height: 48px;
  min-width: 148px;
  top: -50px;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
  padding: 5px 9px;
`

export const Dot = styled.div`
  position: absolute;
  top: 2px;
  right: 26px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
`
