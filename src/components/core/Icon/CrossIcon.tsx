import { Box } from '@core'

import { Icon } from './Icon.types'

export const CrossIcon = ({
  width = 16,
  height = 16,
  viewBox = '0 0 16 16',
  color = '#FF773D',
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
        <path d="M3 3L13 13M13 3L3 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Box>
  )
}
