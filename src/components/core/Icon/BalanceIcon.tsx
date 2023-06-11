import { Box } from '@core'

import { Icon } from './Icon.types'

export const BalanceIcon = ({
  width = 24,
  height = 20,
  viewBox = '0 0 24 20',
  color = '#2F2F2F',
  inheritedColor = false,
  ml = 0,
  mr = 0,
}: Icon) => {
  return (
    <Box sx={{ marginLeft: `${ml}px`, marginRight: `${mr}px` }}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.375 17.9424V15.9488H18.4688C16.3148 15.9488 14.5625 14.1602 14.5625 11.9616C14.5625 9.76308 16.3148 7.97442 18.4688 7.97442H22.375V5.98081C22.375 4.88114 21.4984 3.98721 20.4219 3.98721H3.625C3.19453 3.98721 2.84375 3.62995 2.84375 3.18977C2.84375 2.74958 3.19453 2.39233 3.625 2.39233H18.0781C18.7258 2.39233 19.25 1.85644 19.25 1.19616C19.25 0.535881 18.7258 0 18.0781 0H3.625C1.90156 0 0.5 1.43061 0.5 3.18977V16.7463C0.5 18.5054 1.90156 19.936 3.625 19.936H20.4219C21.4984 19.936 22.375 19.0421 22.375 17.9424ZM19.4631 14.3542H23.3694V9.56951H19.4631C18.1686 9.56951 17.1194 10.6405 17.1194 11.9618C17.1194 13.2832 18.1686 14.3542 19.4631 14.3542Z"
          fill="#2F2F2F"
        />
        <mask id="mask0_897_28090" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="20">
          <path
            d="M22.375 17.9424V15.9488H18.4688C16.3148 15.9488 14.5625 14.1602 14.5625 11.9616C14.5625 9.76308 16.3148 7.97442 18.4688 7.97442H22.375V5.98081C22.375 4.88114 21.4984 3.98721 20.4219 3.98721H3.625C3.19453 3.98721 2.84375 3.62995 2.84375 3.18977C2.84375 2.74958 3.19453 2.39233 3.625 2.39233H18.0781C18.7258 2.39233 19.25 1.85644 19.25 1.19616C19.25 0.535881 18.7258 0 18.0781 0H3.625C1.90156 0 0.5 1.43061 0.5 3.18977V16.7463C0.5 18.5054 1.90156 19.936 3.625 19.936H20.4219C21.4984 19.936 22.375 19.0421 22.375 17.9424ZM19.4631 14.3542H23.3694V9.56951H19.4631C18.1686 9.56951 17.1194 10.6405 17.1194 11.9618C17.1194 13.2832 18.1686 14.3542 19.4631 14.3542Z"
            fill={inheritedColor ? 'currentColor' : color}
          />
        </mask>
        <g mask="url(#mask0_897_28090)">
          <g filter="url(#filter0_f_897_28090)">
            <ellipse cx="2.9375" cy="3.95465" rx="7" ry="7.14508" fill="#FF823D" />
          </g>
          <g filter="url(#filter1_f_897_28090)">
            <ellipse cx="30.9375" cy="21.3069" rx="7" ry="7.14508" fill="#5F9DD6" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_897_28090"
            x="-34.0625"
            y="-33.1904"
            width="74"
            height="74.2902"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_897_28090" />
          </filter>
          <filter
            id="filter1_f_897_28090"
            x="-6.0625"
            y="-15.8381"
            width="74"
            height="74.2902"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_897_28090" />
          </filter>
        </defs>
      </svg>
    </Box>
  )
}
