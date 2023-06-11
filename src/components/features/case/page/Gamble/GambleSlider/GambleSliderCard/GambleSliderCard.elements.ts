import styled from 'styled-components'

export const GambleSliderCardWrap = styled.div<{ $isFocused: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  text-align: center;
  height: 154px;
  width: 121px;
  opacity: ${({ $isFocused }) => !$isFocused && 50}%;
`

export const AvatarFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: #edf2f7;
  border: 2.3px solid #ffffff;
`

export const TagsWrap = styled.div<{ $bottom: number }>`
  z-index: 3;
  position: absolute;
  bottom: ${({ $bottom }) => $bottom}px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const Tag = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 14px;
  border-radius: 25px;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  color: #fff;
`
