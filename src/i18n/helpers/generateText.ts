import { GenerateTextProps } from '@i18n/i18n.types'

export const generateText = ({ keySetBranch, params, pluralizer }: GenerateTextProps): string => {
  const pluralForm = pluralizer(params.count)

  const value = keySetBranch[pluralForm]

  return value.replace('{{count}}', String(params.count))
}
