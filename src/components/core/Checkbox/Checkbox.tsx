import { CheckboxInner, CheckboxWrap } from './Checkbox.elements'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = ({ value, onToggle = () => {} }: CheckboxProps) => {
  return (
    <CheckboxWrap onClick={() => onToggle(!value)} isActive={value}>
      <CheckboxInner />
    </CheckboxWrap>
  )
}
