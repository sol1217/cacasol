import { Box, Icon } from '@core'

export const NavigationButtonSmallArrow = ({
  width = 10,
  height = 8,
  viewBox = '0 0 10 8',
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
          d="M0.5 4.5C0.223858 4.5 2.41411e-08 4.27614 0 4C-2.41411e-08 3.72386 0.223858 3.5 0.5 3.5L0.5 4.5ZM9.85355 3.64645C10.0488 3.84171 10.0488 4.15829 9.85355 4.35355L6.67157 7.53553C6.47631 7.7308 6.15973 7.7308 5.96447 7.53553C5.7692 7.34027 5.7692 7.02369 5.96447 6.82843L8.79289 4L5.96447 1.17157C5.7692 0.97631 5.7692 0.659728 5.96447 0.464466C6.15973 0.269203 6.47631 0.269203 6.67157 0.464466L9.85355 3.64645ZM0.5 3.5L9.5 3.5L9.5 4.5L0.5 4.5L0.5 3.5Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}
