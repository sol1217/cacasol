import { Locale, defaultLocale } from '../i18n.configs'
import { LocaleType } from '../i18n.types'

export const resolveLocale = (locale: string | undefined): LocaleType => {
  const localeTypeCasted = locale as LocaleType

  return localeTypeCasted !== undefined ? Locale[localeTypeCasted] : defaultLocale
}
