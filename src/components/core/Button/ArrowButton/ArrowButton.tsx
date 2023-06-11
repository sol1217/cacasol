import Image from 'next/image'

import arrowButtonDefault from '@assets/svg/arrow-button-default.svg'
import arrowButtonPressed from '@assets/svg/arrow-button-pressed.svg'

import { ArrowButtonWrap } from './ArrowButton.elements'
import { ArrowButtonProps } from './ArrowButton.types'

export const ArrowButton = ({ onClick = () => {} }: ArrowButtonProps) => {
  return (
    <ArrowButtonWrap onClick={onClick}>
      <Image
        src={arrowButtonDefault.src}
        width={arrowButtonDefault.width}
        height={arrowButtonDefault.height}
        alt=""
      />
      <Image
        src={arrowButtonPressed.src}
        width={arrowButtonPressed.width}
        height={arrowButtonPressed.height}
        alt=""
      />
    </ArrowButtonWrap>
  )
}
