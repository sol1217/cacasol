import styled, { css } from 'styled-components'

import { colors } from '@styles/colors'

export const PromoCarouselOuterWrap = styled.div`
  padding: 0 12px 22px 12px;
`

export const PromoCarouselInnerWrap = styled.div<{ $backgroundImage: string }>`
  position: relative;
  min-height: 392px;
  border-radius: 25px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${colors.crystal};
`

export const PromoCarouselArrowWrap = styled.div<{ $direction: 'forward' | 'backward' }>`
  display: flex;
  position: absolute;
  bottom: 16px;
  z-index: 5;
  ${({ $direction }) =>
    $direction === 'forward'
      ? css`
          right: 22px;
        `
      : css`
          left: 22px;
        `}
`

export const PromoCarouselTrapezeCutOut = styled.div`
  min-width: 223px;
  min-height: 60px;
  margin: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.silverBlue};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: perspective(200px) rotateX(28deg);
  }
`

export const TypographyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  width: 100%;
  position: absolute;
  right: 0;
  top: 76px;
  white-space: pre-wrap;
  text-align: center;
`

export const SliderDotsWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 0;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 64px;
`

export const PrimaryButtonWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 0;
  width: 100%;
  position: absolute;
  bottom: -19px;
  right: 0;
  z-index: 4;
`

export const TrapezeCutOutWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 0;
  width: 100%;
  position: absolute;
  bottom: -19px;
  right: 0;
`
