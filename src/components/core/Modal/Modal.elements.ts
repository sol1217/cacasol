import Image from 'next/image'
import styled, { css } from 'styled-components'

import { breakpoints } from '@styles/breakpoints'

import { InfographicIconWrap } from '../Icon/InfographicIcon/InfographicIcon.elements'
import { TrapezoidBottomLineWrap } from './TrapezoidBottomLine/TrapezoidBottomLine.elements'
import { ModalVariant } from './Modal.types'

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  backdrop-filter: blur(6px);
  background: rgba(16, 37, 56, 0.4);

  @media screen and (min-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

export const ModalClose = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -80px;
  right: 15px;
  cursor: pointer;
  background: #ffffff70;
  border-radius: 50%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`

export const ModalWindow = styled.div<{ $variant: ModalVariant }>`
  width: 100%;
  max-width: 460px;
  min-height: 120px;
  background: ${({ theme }) => theme.palette.modal.background};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 2;

  ${({ $variant }) => {
    if ($variant === 'icon') {
      return css`
        padding-top: 80px;
      `
    }
  }}

  @media screen and (min-width: ${breakpoints.tablet}) {
    border-radius: 24px;
  }
`

export const ModalHumpWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${InfographicIconWrap} {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
`

export const ModalHump = styled(Image)`
  width: auto;
  height: 20px;
  position: relative;
`

export const ModalTrapezoid = styled.div`
  width: 280px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 17.2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({ theme }) => theme.palette.modal.background};
  padding: 0 4px;
  padding-top: 8px;
  text-align: center;

  ${TrapezoidBottomLineWrap} {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: -13px;
    transform: translateX(-50%);
    z-index: 3;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.modal.background};
  }

  &::before {
    top: 24px;
    left: -34px;
    transform: skewY(-45deg);
  }

  &::after {
    top: 24px;
    right: -34px;
    transform: skewY(45deg);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
