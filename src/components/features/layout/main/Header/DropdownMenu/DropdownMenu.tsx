import { DropdownMenuWrap } from './DropdownMenu.elements'
import { DropdownMenuProps } from './DropdownMenu.types'

export const DropdownMenu = ({ children, active }: DropdownMenuProps) => {
  return <DropdownMenuWrap $active={active}>{children}</DropdownMenuWrap>
}
