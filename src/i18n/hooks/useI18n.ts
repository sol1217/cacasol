import { useRouter } from 'next/router'

import { resolveLocale } from '../helpers'
import { keySets, pluralizers } from '../i18n.configs'
import { I18n } from '../i18n.types'

export const useI18n = (): I18n => {
  const { locale } = useRouter()
  const resolvedLocale = resolveLocale(locale)

  return { keySet: keySets[resolvedLocale], pluralizer: pluralizers[resolvedLocale] }
}
