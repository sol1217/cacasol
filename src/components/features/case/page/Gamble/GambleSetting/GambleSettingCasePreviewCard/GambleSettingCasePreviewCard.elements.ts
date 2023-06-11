import styled from 'styled-components'

export const GambleSettingCasePreviewCardWrap = styled.div<{
  $width: number
  $height: number
  $color: string
  $boxShadow: string
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: ${({ $color }) => $color};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  border-radius: 18px;
  outline: 2px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
`

export const Stand = styled.div<{ $color: string; $width: number; $height: number }>`
  z-index: 2;
  position: absolute;
  bottom: -20%;
  left: -15%;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border-radius: 45%;
  background: ${({ $color }) => $color};
`
