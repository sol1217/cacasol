import Image from 'next/image'

import returnIcon from '@assets/svg/return-button-icon.svg'

import { ReturnButtonWrap } from './ReturnButton.elements'
import { ReturnButtonProps } from './ReturnButton.types'

export const ReturnButton = ({ onClick }: ReturnButtonProps) => {
  return (
    <ReturnButtonWrap onClick={onClick}>
      <Image src={returnIcon.src} width={22.25} height={24} alt="" />
    </ReturnButtonWrap>
  )
}
