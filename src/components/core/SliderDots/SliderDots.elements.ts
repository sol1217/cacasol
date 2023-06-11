import styled from 'styled-components'

export const SliderDotsWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const SliderDotOutline = styled.div<{ $isVisible: boolean; $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 0.8px solid ${({ $color }) => $color};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`

export const SliderDot = styled.div<{ $color: string }>`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  visibility: visible;
`
