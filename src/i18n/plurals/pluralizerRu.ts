import { getOperands } from '../helpers/getOperands'

export const pluralizerRu = (count: number): string => {
  const { i, v } = getOperands(count)

  if (v === 0 && i % 10 === 1 && i % 100 !== 11) return 'one'

  if (v === 0 && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 <= 14 && i % 100 >= 12)) return 'few'

  if (
    (i === 0 && i % 10 === 0) ||
    (v === 0 && i % 10 >= 5 && i % 10 <= 9) ||
    (v === 0 && i % 100 >= 11 && i % 100 <= 14)
  )
    return 'many'

  return 'other'
}
