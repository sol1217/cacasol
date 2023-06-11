import { InfographicIconVariant } from '../Icon/InfographicIcon/InfographicIcon.types'

export type ModalVariant = 'trapezoid' | 'icon'

export interface ModalIconProps {
  type: ModalVariant
  value: InfographicIconVariant
}

export interface ModalTrapezoidProps {
  type: ModalVariant
  value: string
}

type ModalVariantProps = ModalIconProps | ModalTrapezoidProps

export interface ModalProps {
  children: React.ReactNode
  variant: ModalVariantProps
  isOpen: boolean
  onClose?: () => void
}
