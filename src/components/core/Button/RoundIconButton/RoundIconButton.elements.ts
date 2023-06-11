import styled from 'styled-components'

import { colors } from '@styles/colors'

import { RoundIconButtonIcons } from './RoundIconButton.types'

const VARIANT_COLORS: Record<RoundIconButtonIcons, string> = {
  arrow: colors.iceGray,
  plus: colors.iceGray,
  plusOrange: colors.lightOrange,
}

export const RoundIconButtonWrap = styled.div<{ $variant: RoundIconButtonIcons }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $variant }) => VARIANT_COLORS[$variant]};
  cursor: pointer;
  border-radius: 100%;
`
