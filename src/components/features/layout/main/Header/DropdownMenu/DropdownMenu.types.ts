import { ReactNode } from 'react'

export interface DropdownMenuProps {
  children?: ReactNode
  onClick?: () => void
  active: boolean
}
