import { Box } from '@core'

import { Icon } from './Icon.types'

export const PlusIcon = ({
  width = 12,
  height = 12,
  viewBox = '0 0 10 10',
  color = 'white',
  inheritedColor = false,
  ml = 0,
  mr = 0,
}: Icon) => {
  return (
    <Box sx={{ marginLeft: `${ml}px`, marginRight: `${mr}px` }}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 1V9M9 5L1 5"
          stroke={inheritedColor ? 'currentColor' : color}
          strokeLinecap="round"
        />
      </svg>
    </Box>
  )
}
