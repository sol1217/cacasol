import Image from 'next/image'

import arrowWhiteTop from '@assets/svg/arrow-white-top.svg'

import { Inner, ArrowWrap, PressedMask, UpButtonWrap } from './UpButton.elements'
import { UpButtonProps } from './UpButton.types'

export const UpButton = ({ onClick }: UpButtonProps) => {
  return (
    <UpButtonWrap onClick={onClick}>
      <Inner>
        <PressedMask />
        <ArrowWrap>
          <Image
            src={arrowWhiteTop.src}
            width={arrowWhiteTop.width}
            height={arrowWhiteTop.height}
            alt=""
          />
        </ArrowWrap>
      </Inner>
    </UpButtonWrap>
  )
}
