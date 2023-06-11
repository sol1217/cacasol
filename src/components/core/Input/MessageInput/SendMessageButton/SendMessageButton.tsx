import { SendMessageButtonWrap } from './SendMessageButton.elements'
import { SendMessageButtonProps } from './SendMessageButton.types'

export const SendMessageButton = ({
  onClick,
  width = 18,
  height = 18,
  color = '#91B6CA',
}: SendMessageButtonProps) => {
  return (
    <SendMessageButtonWrap onClick={(event) => onClick(event)}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.1168 1.35933C17.0336 1.0112 16.6511 0.774329 16.3043 0.897454C16.3043 0.897454 1.27863 6.20058 1.27613 6.20245C1.04551 6.28808 0.876132 6.50808 0.863632 6.75995C0.852382 7.00183 1.00176 7.2537 1.22238 7.3562L7.04238 10.0731C7.04238 10.0731 9.87801 7.23745 9.88301 7.23245C10.4455 6.66995 11.3436 7.53995 10.7668 8.1162L7.92613 10.9568C7.92613 10.9568 10.6393 16.7706 10.6443 16.78C10.7549 16.9925 10.9711 17.1275 11.2086 17.1381C11.4668 17.15 11.7055 16.9525 11.798 16.7212C11.798 16.7212 17.098 1.70433 17.1011 1.69495C17.1405 1.58683 17.143 1.46995 17.1168 1.35933Z"
          fill={color}
        />
      </svg>
    </SendMessageButtonWrap>
  )
}
