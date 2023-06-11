import React from 'react'

import { StyledBox } from './Box.elements'
import { BoxProps } from './Box.types'

export const Box = ({ element = 'div', sx = {}, children }: BoxProps) => {
  return (
    <StyledBox as={element} sx={sx}>
      {children}
    </StyledBox>
  )
}
