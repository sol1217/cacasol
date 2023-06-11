import { GetOperandsReturn } from '@i18n/i18n.types'

export const getOperands = (count: number): GetOperandsReturn => {
  const strCount = String(count).split('.')

  const i = Number(strCount[0])
  const v = strCount[1] ? strCount[1].length : 0

  return { i, v }
}
