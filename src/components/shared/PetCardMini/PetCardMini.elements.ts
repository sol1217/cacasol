import styled, { FlattenSimpleInterpolation } from 'styled-components'

import { colors } from '@styles/colors'

export const PetCardMiniWrap = styled.div<{ $width: number; $height: number; $color: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border-radius: 14px;
  background: ${({ $color }) => $color};
`

export const PetCardMiniAvatarWrap = styled.div<{ $size: number }>`
  z-index: 2;
  position: absolute;
  left: 21%;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${colors.silverBlue};
  border: 3px solid ${colors.crystal};
`

export const PetCardMiniTagWrap = styled.div<{
  $color: string
  $position: FlattenSimpleInterpolation
}>`
  z-index: 3;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid ${colors.crystal};
  background: ${({ $color }) => $color};
  color: ${colors.crystal};
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 11px;
  ${({ $position }) => $position}
`
