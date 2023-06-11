import styled from 'styled-components'

export const OtherCollectionsCarouselWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 176px;
  overflow: hidden;
`
export const SliderWrap = styled.div`
  position: relative;
  display: block;
  text-align: center;
  max-width: 465px;
  width: calc(116%);
  min-width: 450px;
  margin: 0 0 0 -16%;

  .slick-list {
    overflow: visible;
  }
`
