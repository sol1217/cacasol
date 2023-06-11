import { Key, KeySet } from './keys/keys.types'
import { Locale } from './i18n.configs'

export type LocaleType = keyof typeof Locale

export type KeySets = Record<LocaleType, KeySet>

export type Pluralizer = (count: number) => string

export type Pluralizers = Record<LocaleType, Pluralizer>

export type I18n = {
  keySet: KeySet
  pluralizer: Pluralizer
}

export type TranslateProps = {
  key: Key
  params?: TranslateParams
}

export type GenerateTextProps = {
  keySetBranch: Record<string, string>
  params: TranslateParams
  pluralizer: Pluralizer
}

export type TranslateParams = { count: number }

export type GetOperandsReturn = {
  i: number
  v: number
}
