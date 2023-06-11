import { Box } from '@core'

import { PressableIcon } from './Icon.types'

export const LockIcon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
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
          d="M17 11.6416H7C6.80109 11.6416 6.61032 11.5626 6.46967 11.4219C6.32902 11.2813 6.25 11.0905 6.25 10.8916V5.8916C6.25 4.36661 6.8558 2.90407 7.93414 1.82574C9.01247 0.747403 10.475 0.141602 12 0.141602C13.525 0.141602 14.9875 0.747403 16.0659 1.82574C17.1442 2.90407 17.75 4.36661 17.75 5.8916V10.8916C17.75 11.0905 17.671 11.2813 17.5303 11.4219C17.3897 11.5626 17.1989 11.6416 17 11.6416ZM7.75 10.1416H16.25V5.8916C16.25 4.76443 15.8022 3.68343 15.0052 2.8864C14.2082 2.08937 13.1272 1.6416 12 1.6416C10.8728 1.6416 9.79183 2.08937 8.9948 2.8864C8.19777 3.68343 7.75 4.76443 7.75 5.8916V10.1416Z"
          fill={generateColor()}
        />
        <path
          d="M18 8.1416H6C4.48122 8.1416 3.25 9.37282 3.25 10.8916V18.8916C3.25 20.4104 4.48122 21.6416 6 21.6416H18C19.5188 21.6416 20.75 20.4104 20.75 18.8916V10.8916C20.75 9.37282 19.5188 8.1416 18 8.1416Z"
          fill={generateColor()}
        />
        <path
          d="M12 17.6416C11.8011 17.6416 11.6103 17.5626 11.4697 17.4219C11.329 17.2813 11.25 17.0905 11.25 16.8916V15.8916C11.25 15.6927 11.329 15.5019 11.4697 15.3613C11.6103 15.2206 11.8011 15.1416 12 15.1416C12.1989 15.1416 12.3897 15.2206 12.5303 15.3613C12.671 15.5019 12.75 15.6927 12.75 15.8916V16.8916C12.75 17.0905 12.671 17.2813 12.5303 17.4219C12.3897 17.5626 12.1989 17.6416 12 17.6416Z"
          fill="white"
        />
        <path
          d="M12 16.3916C12.8284 16.3916 13.5 15.72 13.5 14.8916C13.5 14.0632 12.8284 13.3916 12 13.3916C11.1716 13.3916 10.5 14.0632 10.5 14.8916C10.5 15.72 11.1716 16.3916 12 16.3916Z"
          fill="white"
        />
      </svg>
    </Box>
  )
}
