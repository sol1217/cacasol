import { Box, Icon } from '@core'

export const NavigationButtonLargeArrow = ({
  width = 14,
  height = 12,
  viewBox = '0 0 14 12',
  color = 'none',
  inheritedColor = false,
  ml = 0,
  mr = 0,
}: Icon) => {
  return (
    <Box sx={{ marginLeft: `${ml}px`, marginRight: `${mr}px`, pointerEvents: 'none' }}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6.75C0.585786 6.75 0.25 6.41421 0.25 6C0.25 5.58579 0.585786 5.25 1 5.25L1 6.75ZM13.5303 5.46967C13.8232 5.76256 13.8232 6.23744 13.5303 6.53033L8.75736 11.3033C8.46447 11.5962 7.98959 11.5962 7.6967 11.3033C7.40381 11.0104 7.40381 10.5355 7.6967 10.2426L11.9393 6L7.6967 1.75736C7.40381 1.46447 7.40381 0.989592 7.6967 0.696699C7.98959 0.403805 8.46447 0.403805 8.75736 0.696698L13.5303 5.46967ZM1 5.25L13 5.25L13 6.75L1 6.75L1 5.25Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}
