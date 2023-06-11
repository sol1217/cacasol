import { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export type Option<T = any> = {
  value: T
  label: string | number | ReactNode
}
export interface SelectProps<T = any> {
  value: Option<T> | null | undefined
  options: Option<T>[]
  onChange: (option: Option<T>) => void
  placeholder?: string
  dropdownStyles?: FlattenSimpleInterpolation
}
