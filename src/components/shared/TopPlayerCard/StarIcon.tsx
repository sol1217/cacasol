import { StarIconProps } from './TopPlayerCard.types'

export const StarIcon = ({ primaryColor, secondaryColor }: StarIconProps) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.5 37C18.8832 37 13.5 31.6168 13.5 25C13.5 18.3832 18.8832 13 25.5 13C32.1168 13 37.5 18.3832 37.5 25C37.5 31.6168 32.1168 37 25.5 37Z"
        fill={secondaryColor}
      />
      <path
        d="M25.5 34C20.5374 34 16.5 29.9626 16.5 25C16.5 20.0374 20.5374 16 25.5 16C30.4626 16 34.5 20.0374 34.5 25C34.5 29.9626 30.4626 34 25.5 34Z"
        fill={primaryColor}
      />
      <g filter="url(#filter0_f_1159_28860)">
        <path
          d="M25.5 34C20.5374 34 16.5 29.9626 16.5 25C16.5 20.0374 20.5374 16 25.5 16C30.4626 16 34.5 20.0374 34.5 25C34.5 29.9626 30.4626 34 25.5 34Z"
          fill={primaryColor}
        />
      </g>
      <path
        d="M25.1196 20.1708C25.2393 19.8023 25.7607 19.8023 25.8804 20.1708L26.7573 22.8695C26.8108 23.0343 26.9644 23.1459 27.1377 23.1459H29.9753C30.3628 23.1459 30.5239 23.6417 30.2104 23.8695L27.9147 25.5374C27.7745 25.6392 27.7159 25.8198 27.7694 25.9846L28.6463 28.6833C28.766 29.0518 28.3442 29.3583 28.0308 29.1305L25.7351 27.4626C25.5949 27.3608 25.4051 27.3608 25.2649 27.4626L22.9692 29.1305C22.6558 29.3583 22.234 29.0518 22.3537 28.6833L23.2306 25.9846C23.2841 25.8198 23.2255 25.6392 23.0853 25.5374L20.7896 23.8695C20.4761 23.6417 20.6372 23.1459 21.0247 23.1459H23.8623C24.0356 23.1459 24.1892 23.0343 24.2427 22.8695L25.1196 20.1708Z"
        fill={secondaryColor}
      />
      <defs>
        <filter
          id="filter0_f_1159_28860"
          x="0.5"
          y="0"
          width="50"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_1159_28860" />
        </filter>
      </defs>
    </svg>
  )
}
