import Link from 'next/link'
import styled from 'styled-components'

export const CollectionPreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CollectionPreviewSliderWrap = styled.div`
  display: block;
  width: 100%;
  height: 295px;

  .slick-prev {
    background: green;
  }

  .slick-slider {
    gap: 8px;
  }
`

export const CollectionPreviewArrowBox = styled.div<{ $right: number }>`
  position: absolute;
  top: -44px;
  width: 24px;
  height: 24px;
  right: ${({ $right }) => $right}px;
`

export const GoToButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const GoToButton = styled(Link)`
  display: flex;
  justify-content: center;
  width: calc(100% + 24px);
  max-width: 400px;
  height: 40px;
  position: relative;
  overflow: hidden;
  margin: 20px -12px 0 -12px;
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    position: absolute;
    top: -41px;
    left: calc(50% - 228.5px);
  }
`
