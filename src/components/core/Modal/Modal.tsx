import { useTheme } from '@hooks'
import CapImage from '@assets/svg/pop-up-cap.svg'

import { CrossIcon, InfographicIcon } from '../Icon'
import { Typography } from '../Typography'
import {
  ModalHump,
  ModalClose,
  ModalWindow,
  ModalHumpWrap,
  ModalTrapezoid,
  ModalBackground,
} from './Modal.elements'
import { ModalProps, ModalIconProps } from './Modal.types'
import { TrapezoidBottomLine } from './TrapezoidBottomLine'

export const Modal = ({ isOpen, onClose, children, variant }: ModalProps) => {
  const theme = useTheme()
  if (!isOpen) return null

  const topItemComponent = () => {
    if (variant.type === 'trapezoid') {
      return (
        <ModalTrapezoid>
          <Typography variant="desktopH41616" color={theme.palette.modal.headline}>
            {variant.value}
          </Typography>
          <TrapezoidBottomLine />
        </ModalTrapezoid>
      )
    }

    if (variant.type === 'icon') {
      const icon = (variant as ModalIconProps).value
      return (
        <ModalHumpWrap>
          <ModalHump src={CapImage} alt="cap-image" />
          <InfographicIcon variant={icon} />
        </ModalHumpWrap>
      )
    }

    return null
  }

  return (
    <ModalBackground>
      {topItemComponent()}

      <ModalWindow $variant={variant.type}>
        <ModalClose onClick={onClose}>
          <CrossIcon />
        </ModalClose>
        {children}
      </ModalWindow>
    </ModalBackground>
  )
}
