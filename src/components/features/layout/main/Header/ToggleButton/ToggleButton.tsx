import { useState } from 'react'
import { css } from 'styled-components'

import { ClosedIcon } from './ClosedIcon'
import { OpenedIcon } from './OpenedIcon'
import { ToggleButtonWrap } from './ToggleButton.elements'
import { ToggleButtonProps } from './ToggleButton.types'

export const ToggleButton = ({ onToggle, sx = css`` }: ToggleButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen(!isOpen)
    onToggle(!isOpen)
  }

  return (
    <ToggleButtonWrap onClick={onClickHandler} $sx={sx}>
      {isOpen ? <OpenedIcon /> : <ClosedIcon />}
    </ToggleButtonWrap>
  )
}
