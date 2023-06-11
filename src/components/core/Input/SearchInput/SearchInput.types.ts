import { defaultTheme } from '@styles'

export type SearchInputProps = {
  value: string
  placeholder: string
  onChange: (value: string) => void
  loading?: boolean
  colorVariant?: SearchInputColorVariant
}

export type SearchInputColorVariant = keyof typeof defaultTheme.palette.input.search
