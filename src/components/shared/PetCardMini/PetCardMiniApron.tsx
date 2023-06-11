import { PetCardMiniApronProps } from './PetCardMini.types'

export const PetCardMiniApron = ({ width, height, gradientFillUrl }: PetCardMiniApronProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 86 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3795 4.68682C13.5235 1.18013 11.0461 -2.41492 8.26074 -5.00406C4.40922 -8.58422 15.9419 -15.6165 25.7141 -20.9029C26.2229 -21.1782 26.5405 -21.7091 26.5405 -22.2876C26.5405 -23.1549 27.2435 -23.858 28.1108 -23.858L31.2364 -23.858C31.2747 -23.858 31.3123 -23.8672 31.3462 -23.8849L31.5489 -23.9908C31.5987 -24.0169 31.6592 -23.9848 31.6656 -23.9289C31.6702 -23.8885 31.7045 -23.858 31.7452 -23.858L53.9773 -23.858C54.018 -23.858 54.0522 -23.8885 54.0569 -23.9289C54.0633 -23.9848 54.1237 -24.0169 54.1736 -23.9908L54.3762 -23.8849C54.4101 -23.8672 54.4478 -23.858 54.4861 -23.858L61.9612 -23.858C64.1818 -23.858 65.9821 -22.0577 65.9821 -19.8371C65.9821 -18.4146 66.7377 -17.1029 67.9482 -16.3558C74.8746 -12.0807 80.2765 -7.6205 77.4617 -5.00406C74.6697 -2.40871 72.1871 1.19739 70.3297 4.71207C69.2769 6.70415 68.7706 8.92606 68.6078 11.1733C68.2054 16.7284 69.7912 22.21 70.8754 27.6731C71.2342 29.4811 71.4223 31.3505 71.4223 33.2639C71.4223 49.0378 58.6351 61.825 42.8612 61.825C27.0873 61.825 14.3 49.0378 14.3 33.2639C14.3 31.3732 14.4838 29.5253 14.8343 27.7373C15.9093 22.2544 17.5018 16.756 17.1067 11.1826C16.9465 8.92316 16.4391 6.68884 15.3795 4.68682Z"
      fill={gradientFillUrl}
    />
    <defs>
      <radialGradient
        id="PetCardMiniApronGradientSea"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(30.8698 -13.7814) rotate(90) scale(71.9697 103.55)">
        <stop stopColor="#AEFFEC" />
        <stop offset="0.659574" stopColor="#5FB1F3" />
        <stop offset="1" stopColor="#3197EA" />
      </radialGradient>
      <radialGradient
        id="PetCardMiniApronGradientOrange"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(93.9875 18.9126) rotate(-180) scale(82.3275 146.683)">
        <stop stopColor="#FFDF39" />
        <stop offset="0.659574" stopColor="#FF773D" />
        <stop offset="1" stopColor="#FF6B3D" />
      </radialGradient>
      <radialGradient
        id="PetCardMiniApronGradientGrape"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(93.9875 18.9126) rotate(-180) scale(82.3275 146.683)">
        <stop stopColor="#C956FF" />
        <stop offset="0.659574" stopColor="#7A2DF9" />
        <stop offset="1" stopColor="#580CD6" />
      </radialGradient>
    </defs>
  </svg>
)
