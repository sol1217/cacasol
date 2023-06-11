import { Box } from '@core'

import { PressableIcon } from './Icon.types'

export const HidePasswordIcon = ({
  width = 18,
  height = 18,
  viewBox = '0 0 18 18',
  color = 'none',
  inheritedColor = false,
  ml = 0,
  mr = 0,
  isPressed,
}: PressableIcon) => {
  const generateColor = () => (isPressed ? '#C0D0D7' : '#E3EDF2')

  return (
    <Box sx={{ marginLeft: `${ml}px`, marginRight: `${mr}px` }}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 3.63477C5.56091 3.63477 2.44216 5.51632 0.140841 8.57248C-0.0469469 8.82286 -0.0469469 9.17266 0.140841 9.42304C2.44216 12.4829 5.56091 14.3644 9 14.3644C12.4391 14.3644 15.5578 12.4829 17.8592 9.42673C18.0469 9.17634 18.0469 8.82654 17.8592 8.57616C15.5578 5.51633 12.4391 3.63477 9 3.63477ZM9.2467 12.7774C6.96379 12.9211 5.07855 11.0395 5.22215 8.7529C5.33998 6.86766 6.86806 5.33958 8.7533 5.22176C11.0362 5.07815 12.9214 6.95971 12.7778 9.2463C12.6563 11.1279 11.1283 12.6559 9.2467 12.7774Z"
          fill={generateColor()}
        />
        <rect
          x="1"
          y="15.1421"
          width="20"
          height="2"
          transform="rotate(-45 1 15.1421)"
          fill={generateColor()}
        />
      </svg>
    </Box>
  )
}
