import { getOperands } from '../helpers/getOperands'

export const pluralizerEn = (count: number): string => {
  const { i, v } = getOperands(count)

  if (i === 1 && v === 0) {
    return 'one'
  }

  return 'other'
}
