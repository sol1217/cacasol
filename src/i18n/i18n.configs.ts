import { KeySets, LocaleType, Pluralizers } from './i18n.types'
import { en, ru } from './keys'
import { pluralizerEn, pluralizerRu } from './plurals'

export enum Locale {
  en = 'en',
  ru = 'ru',
}

export const defaultLocale: LocaleType = Locale.ru

export const keySets: KeySets = {
  en: en,
  ru: ru,
}

export const pluralizers: Pluralizers = {
  en: pluralizerEn,
  ru: pluralizerRu,
}
