import { Box } from '@core'

import { Icon } from './Icon.types'

export const ArrowIcon = ({
  width = 12,
  height = 12,
  viewBox = '0 0 12 8',
  color = '#2F2F2F',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.98572 7.89977L11.6423 2.24316L10.2282 0.829011L5.98608 5.07111L1.74338 0.828407L0.32923 2.24256L4.57193 6.48526L4.57157 6.48562L5.98572 7.89977Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}
