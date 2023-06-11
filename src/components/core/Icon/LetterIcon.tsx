import { Box } from '@core'

import { PressableIcon } from './Icon.types'

export const LetterIcon = ({
  width = 20,
  height = 15,
  viewBox = '0 0 20 14',
  color = 'none',
  inheritedColor = false,
  ml = 0,
  mr = 0,
  isPressed,
}: PressableIcon) => {
  const generateColor = () => (isPressed ? '#FF773D' : '#E3EDF2')

  return (
    <Box sx={{ marginLeft: `${ml}px`, marginRight: `${mr}px`, pointerEvents: 'none' }}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5785 9.89366C10.3896 10.0117 10.1771 10.059 9.98819 10.059C9.79929 10.059 9.58678 10.0117 9.39787 9.89366L0 4.15576V11.7827C0 13.412 1.32231 14.7343 2.95159 14.7343H17.0484C18.6777 14.7343 20 13.412 20 11.7827V4.15576L10.5785 9.89366Z"
          fill={generateColor()}
        />
        <path
          d="M17.0482 0H2.95138C1.55823 0 0.377591 0.991735 0.0942383 2.31405L10.0116 8.35891L19.9053 2.31405C19.622 0.991735 18.4413 0 17.0482 0Z"
          fill={generateColor()}
        />
      </svg>
    </Box>
  )
}
