import styled from 'styled-components'

import { mixins } from '@styles/mixins'

export const LoginPageWrap = styled.div`
  padding: 142px 12px 0 12px;
`

export const LoginPageInner = styled.div`
  display: flex;
  padding: 47px 23px 29px 23px;
  flex-direction: column;
  background-color: #fff;
  min-height: 100px;
  border-radius: 20px;
  position: relative;
`

export const TopMaskWrap = styled.div`
  position: absolute;
  top: -32px;
  left: calc(50% - ${369 / 2}px);
  width: 369px;

  @media (max-width: 392px) {
    width: 100%;
    max-width: 336px;
    left: calc(50% - ${336 / 2}px);

    & > svg {
      width: 336px;
    }
  }
`

export const SectionTitleWrap = styled.div`
  position: absolute;
  top: 18px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

export const FormWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  ${mixins.flex.columnCenter}
`
