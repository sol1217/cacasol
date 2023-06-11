import { Box } from '@core'

import { Icon } from './Icon.types'

export const BlackArrow = ({
  width = 10,
  height = 7,
  viewBox = '0 0 10 7',
  color = '#2F2F2F',
  inheritedColor = false,
  ml = 0,
  mr = 0,
}: Icon) => {
  return (
    <Box sx={{ marginLeft: `${ml}px`, marginRight: `${mr}px` }}>
      {/* <svg width={width}
        height={height}
        viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.98127 10.1631L4.54375 8.56409C3.52858 7.43487 3.021 6.87025 3.00114 6.3902C2.98389 5.9732 3.16265 5.57213 3.48429 5.30617C3.85457 5 4.61379 5 6.13225 5H9.0073C10.5258 5 11.285 5 11.6553 5.30617C11.9769 5.57213 12.1557 5.9732 12.1384 6.3902C12.1186 6.87025 11.611 7.43486 10.5958 8.56408L10.5958 8.56409L9.15828 10.1631C8.60823 10.775 8.33321 11.0809 8.00922 11.1939C7.72465 11.293 7.4149 11.293 7.13034 11.1939C6.80635 11.0809 6.53132 10.775 5.98127 10.1631Z"
          fill={inheritedColor ? 'currentColor' : color} />
      </svg> */}

      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.98127 5.16314L1.54375 3.56409C0.528582 2.43487 0.0210005 1.87025 0.00114306 1.3902C-0.0161062 0.973202 0.16265 0.572129 0.484291 0.306171C0.854565 0 1.61379 0 3.13225 0H6.0073C7.52576 0 8.28499 0 8.65526 0.306171C8.9769 0.572129 9.15566 0.973202 9.13841 1.3902C9.11855 1.87025 8.61097 2.43486 7.59581 3.56408L7.59581 3.56409L6.15828 5.16314C5.60823 5.77499 5.33321 6.08091 5.00922 6.19385C4.72465 6.29305 4.4149 6.29305 4.13034 6.19385C3.80635 6.08091 3.53132 5.77499 2.98127 5.16314Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}
