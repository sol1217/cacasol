import Link from 'next/link'
import styled from 'styled-components'

export const BackgroundWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.45);
  transition: color ${({ theme }) => theme.transition.default};
`

export const CheckBalanceButtonWrap = styled(Link)`
  width: 154px;
  height: 56px;
  border-radius: 100px;
  position: relative;
  display: flex;

  &:active > ${BackgroundWrap} {
    color: rgba(255, 255, 255, 0.8);
  }
`

export const BalanceInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-left: 8px;
`

export const BalanceIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  position: relative;
`

export const BalanceIconContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.5);
`
