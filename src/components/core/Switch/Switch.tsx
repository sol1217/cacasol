import { Thumb, SwitchWrap } from './Switch.elements'
import { SwitchProps } from './Switch.types'

export const Switch = ({ value, onToggle = () => {}, disabled = false }: SwitchProps) => {
  const onToggleHandler = () => {
    if (!disabled) onToggle(!value)
  }

  return (
    <SwitchWrap $disabled={disabled} $active={value} onClick={onToggleHandler}>
      <Thumb />
    </SwitchWrap>
  )
}
