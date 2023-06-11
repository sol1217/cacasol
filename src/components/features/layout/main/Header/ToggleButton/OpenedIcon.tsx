import { Box, Icon } from '@core'

export const OpenedIcon = ({
  width = 20,
  height = 20,
  viewBox = '0 0 20 20',
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
          d="M2.60069 0.413496C2.04936 -0.137832 1.15548 -0.137832 0.604149 0.413496C0.0528205 0.964825 0.0528208 1.8587 0.604149 2.41003L7.81524 9.62113L0.413497 17.0229C-0.137832 17.5742 -0.137832 18.4681 0.413496 19.0194C0.964825 19.5707 1.85871 19.5707 2.41003 19.0194L9.81178 11.6177L16.9924 18.7983C17.5437 19.3496 18.4376 19.3496 18.9889 18.7983C19.5403 18.2469 19.5403 17.3531 18.9889 16.8017L11.8083 9.62113L18.7983 2.63117C19.3496 2.07984 19.3496 1.18596 18.7983 0.634632C18.2469 0.0833033 17.3531 0.083304 16.8017 0.634633L9.81178 7.62459L2.60069 0.413496Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}
