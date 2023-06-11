import { FlattenSimpleInterpolation } from 'styled-components'

export type ToggleButtonProps = {
  onToggle: (isOpen: boolean) => void
  sx?: FlattenSimpleInterpolation
}
