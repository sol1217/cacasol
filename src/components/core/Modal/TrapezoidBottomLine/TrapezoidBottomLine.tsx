import { Screen } from '@core'

import { TrapezoidBottomLineWrap } from './TrapezoidBottomLine.elements'

export const TrapezoidBottomLine = () => {
  return (
    <TrapezoidBottomLineWrap>
      <Screen device="desktop">
        <svg
          width="282"
          height="37"
          viewBox="0 0 282 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M217.706 29.8299L213.438 33.1852C210.706 35.3326 207.333 36.5 203.858 36.5H77.7147C74.0687 36.5 70.5394 35.2147 67.7472 32.8701L64.3766 30.0398C62.5394 28.4971 60.2294 27.63 57.8309 27.5828L24.5183 26.9277C11.1776 26.6654 0.5 15.7757 0.5 2.43247V0.5H95.175H188H281.5V2.43247C281.5 15.7757 270.822 26.6654 257.482 26.9277L223.989 27.5864C221.706 27.6313 219.501 28.4189 217.706 29.8299Z"
            stroke="url(#paint0_radial_1462_34444)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1462_34444"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(141 -27.8434) rotate(90) scale(64.8434 494.212)">
              <stop offset="0.826352" stopColor="#E4EBEE" stopOpacity="0" />
              <stop offset="1" stopColor="#E4EBEE" />
            </radialGradient>
          </defs>
        </svg>
      </Screen>
    </TrapezoidBottomLineWrap>
  )
}
