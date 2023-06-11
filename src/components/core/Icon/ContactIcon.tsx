import { Box } from '@core'

import { PressableIcon } from './Icon.types'

export const ContactIcon = ({
  width = 16,
  height = 19,
  viewBox = '0 0 16 19',
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
          d="M0 16.7967C0 13.9814 1.9398 11.5834 4.57605 11.1398L4.81351 11.0998C6.92448 10.7445 9.07552 10.7445 11.1865 11.0998L11.424 11.1398C14.0602 11.5834 16 13.9814 16 16.7967C16 18.0136 15.0646 19 13.9107 19H2.08929C0.935407 19 0 18.0136 0 16.7967Z"
          fill={generateColor()}
        />
        <path
          d="M12.6667 4.59375C12.6667 7.13081 10.5774 9.1875 8.00002 9.1875C5.4227 9.1875 3.33336 7.13081 3.33336 4.59375C3.33336 2.05669 5.4227 0 8.00002 0C10.5774 0 12.6667 2.05669 12.6667 4.59375Z"
          fill={generateColor()}
        />
        <mask
          id="mask0_886_22974"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={width}
          height={height}>
          <path
            d="M0 16.7967C0 13.9814 1.9398 11.5834 4.57605 11.1398L4.81351 11.0998C6.92448 10.7445 9.07552 10.7445 11.1865 11.0998L11.424 11.1398C14.0602 11.5834 16 13.9814 16 16.7967C16 18.0136 15.0646 19 13.9107 19H2.08929C0.935407 19 0 18.0136 0 16.7967Z"
            fill={generateColor()}
          />
          <path
            d="M12.6667 4.59375C12.6667 7.13081 10.5774 9.1875 8.00002 9.1875C5.4227 9.1875 3.33336 7.13081 3.33336 4.59375C3.33336 2.05669 5.4227 0 8.00002 0C10.5774 0 12.6667 2.05669 12.6667 4.59375Z"
            fill={generateColor()}
          />
        </mask>
        <g mask="url(#mask0_886_22974)">
          <g filter="url(#filter0_f_886_22974)">
            <ellipse cx="8" cy="2" rx="5" ry="2" fill={generateColor()} />
          </g>
          <g filter="url(#filter1_f_886_22974)">
            <circle cx="8.5" cy="22.5" r="5.5" fill={generateColor()} />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_886_22974"
            x="-3"
            y="-6"
            width="22"
            height="16"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_886_22974" />
          </filter>
          <filter
            id="filter1_f_886_22974"
            x="-5"
            y="9"
            width="27"
            height="27"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_886_22974" />
          </filter>
        </defs>
      </svg>
    </Box>
  )
}
