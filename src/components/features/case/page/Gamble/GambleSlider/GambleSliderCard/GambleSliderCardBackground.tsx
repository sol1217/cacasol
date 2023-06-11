import { GambleSliderCardBackgroundProps } from './GambleSliderCard.types'
import { getGradientFillUrl } from './GambleSliderCard.utils'

export const GambleSliderCardBackground = ({
  width,
  height,
  gradient,
}: GambleSliderCardBackgroundProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 121 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.3068 15.7206C32.9913 15.1636 36.1077 12.8124 38.5093 9.96326C43.6225 3.89736 51.5721 0 60.5 0C69.4279 0 77.3775 3.89736 82.4907 9.96326C84.8924 12.8124 88.0087 15.1636 91.6932 15.7206C96.8151 16.4948 101.283 17.3945 105.074 18.2938C110.62 19.6095 113.393 20.2673 116.183 22.8264C116.952 23.5315 117.98 24.7623 118.524 25.6297C120.5 28.7781 120.5 31.9371 120.5 38.2552V128.012C120.5 138.84 120.5 144.254 117.536 148.049C116.579 149.274 115.421 150.352 114.104 151.243C110.025 154 98.6945 154 87.0574 154H80.1721C74.2705 154 80.7362 154 75.2541 154H60.9918H45.2541C39.7721 154 40.8279 154 33.9426 154C22.3055 154 10.9754 154 6.89644 151.243C5.57911 150.352 4.42062 149.274 3.46353 148.049C0.5 144.254 0.5 138.84 0.5 128.012V38.2552C0.5 31.9371 0.5 28.7781 2.4756 25.6297C3.01991 24.7623 4.04781 23.5315 4.81671 22.8264C7.60748 20.2673 10.3803 19.6095 15.926 18.2938C19.7167 17.3945 24.1849 16.4948 29.3068 15.7206Z"
      fill="white"
    />
    <mask id="mask0_2639_107209" maskUnits="userSpaceOnUse" x="0" y="0" width="121" height="154">
      <path
        d="M29.3068 15.7206C32.9913 15.1636 36.1077 12.8124 38.5093 9.96326C43.6225 3.89736 51.5721 0 60.5 0C69.4279 0 77.3775 3.89736 82.4907 9.96326C84.8924 12.8124 88.0087 15.1636 91.6932 15.7206C96.8152 16.4948 101.283 17.3945 105.074 18.2938C110.62 19.6095 113.393 20.2673 116.183 22.8264C116.952 23.5315 117.98 24.7623 118.524 25.6297C120.5 28.7781 120.5 31.9371 120.5 38.2552V128.012C120.5 138.84 120.5 144.254 117.536 148.049C116.579 149.274 115.421 150.352 114.104 151.243C110.025 154 98.6945 154 87.0574 154H80.1721C74.2705 154 80.7362 154 75.2541 154H60.9918H45.2541C39.7721 154 40.8279 154 33.9426 154C22.3055 154 10.9754 154 6.89644 151.243C5.57911 150.352 4.42062 149.274 3.46353 148.049C0.5 144.254 0.5 138.84 0.5 128.012V38.2552C0.5 31.9371 0.5 28.7781 2.4756 25.6297C3.01991 24.7623 4.04781 23.5315 4.81671 22.8264C7.60748 20.2673 10.3803 19.6095 15.926 18.2938C19.7167 17.3945 24.1849 16.4948 29.3068 15.7206Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_2639_107209)">
      <path
        d="M21.1847 68.2509C20.7812 63.2094 17.0303 59.0734 12.0522 58.1806L0.5 56.1087V-24H41H80.5H120.5V56.1087L108.948 58.1806C103.97 59.0734 100.219 63.2094 99.8153 68.2509L99.7067 69.6077C98.9658 78.8651 91.237 86 81.9501 86H39.0499C29.763 86 22.0342 78.8651 21.2933 69.6077L21.1847 68.2509Z"
        fill={getGradientFillUrl(gradient)}
      />
    </g>
    <defs>
      <radialGradient
        id="gambleSliderCardGrape"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(60.5 -48.5201) rotate(90) scale(128.05 205.091)">
        <stop stopColor="#C956FF" />
        <stop offset="0.659574" stopColor="#7A2DF9" />
        <stop offset="1" stopColor="#580CD6" />
      </radialGradient>
      <radialGradient
        id="gambleSliderCardSea"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(60.5 -48.5201) rotate(90) scale(128.05 205.091)">
        <stop stopColor="#AEFFEC" />
        <stop offset="0.659574" stopColor="#5FB1F3" />
        <stop offset="1" stopColor="#3197EA" />
      </radialGradient>
      <radialGradient
        id="gambleSliderCardOrange"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(60.5 -48.5201) rotate(90) scale(128.05 205.091)">
        <stop stopColor="#FFDF39" />
        <stop offset="0.659574" stopColor="#FF773D" />
        <stop offset="1" stopColor="#FF6B3D" />
      </radialGradient>
    </defs>
  </svg>
)
