import { Box } from '@core'

import { Icon } from '../Icon.types'

export const InstagramIcon = ({
  width = 16,
  height = 16,
  viewBox = '0 0 16 16',
  color = '#86959E',
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
          d="M9.94444 2C11.632 2 13 3.36802 13 5.05556V9.94444C13 11.632 11.632 13 9.94444 13H5.05556C3.36802 13 2 11.632 2 9.94444L2 5.05556C2 3.36802 3.36802 2 5.05556 2L9.94444 2ZM7.5 5.05556C6.14997 5.05556 5.05556 6.14997 5.05556 7.5C5.05556 8.85001 6.14997 9.94444 7.5 9.94444C8.85001 9.94444 9.94444 8.85001 9.94444 7.5C9.94444 6.14997 8.85001 5.05556 7.5 5.05556ZM7.5 6.27778C8.17503 6.27778 8.72222 6.82497 8.72222 7.5C8.72222 8.17503 8.17503 8.72222 7.5 8.72222C6.82497 8.72222 6.27778 8.17503 6.27778 7.5C6.27778 6.82497 6.82497 6.27778 7.5 6.27778ZM10.25 4.13889C9.91248 4.13889 9.63889 4.4125 9.63889 4.75C9.63889 5.0875 9.91248 5.36111 10.25 5.36111C10.5875 5.36111 10.8611 5.0875 10.8611 4.75C10.8611 4.4125 10.5875 4.13889 10.25 4.13889Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}