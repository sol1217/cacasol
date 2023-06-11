import { TranslateProps, TranslateParams, GenerateTextProps } from '@i18n/i18n.types'
import { generateText } from '@i18n/helpers/generateText'
import { useI18n } from '@i18n/hooks/useI18n'

import { Key, KeySet } from '../keys/keys.types'

export const useTranslate = () => {
  const { keySet, pluralizer } = useI18n()

  return (key: Key, params?: TranslateParams) => {
    const value = keySet[key]
    if (typeof value === 'string') return value

    return generateText({
      keySetBranch: value,
      params: params,
      pluralizer: pluralizer,
    } as GenerateTextProps)
  }
}
