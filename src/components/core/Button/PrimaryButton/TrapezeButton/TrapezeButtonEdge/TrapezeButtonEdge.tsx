import { TrapezeButtonEdgeWrap } from './TrapezeButtonEdge.elements'
import { TrapezeButtonEdgeProps } from './TrapezeButtonEdge.types'

export const TrapezeButtonEdge = ({ reversed }: TrapezeButtonEdgeProps) => {
  return (
    <TrapezeButtonEdgeWrap $reversed={reversed}>
      <svg
        width="30"
        height="64"
        viewBox="0 0 30 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <g clipPath="url(#clip0_4276_192136)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 59.9986C16.5755 59.9927 9.69308 59.8431 5.364 56.0944C3.922 54.8453 2.714 53.3482 1.799 51.6739C-1.06198 46.4402 0.478981 39.3271 3.56094 25.1007L3.561 25.1004L4.08099 22.7004C6.16699 13.0722 7.21 8.2581 10.267 5.01867C11.262 3.9639 12.396 3.04932 13.638 2.30005C17.1521 0.179304 21.6114 0.0130355 30 0V59.9986Z"
            fill="#F15F30"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 63.998C16.7636 63.9898 9.94835 63.8159 5.65013 60.0939C4.20813 58.8448 3.00013 57.3477 2.08513 55.6734C-0.77585 50.4397 0.765114 43.3266 3.84707 29.1002L3.84714 29.0999L4.36713 26.6999C6.45313 17.0717 7.49613 12.2576 10.5531 9.01816C11.5481 7.96339 12.6821 7.04881 13.9241 6.29954C17.398 4.20304 21.7957 4.01658 30 4V63.998Z"
            fill="#F15F30"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 63.9986C16.5755 63.9927 9.69308 63.8431 5.364 60.0944C3.922 58.8453 2.714 57.3482 1.799 55.6739C-1.06198 50.4402 0.478981 43.3271 3.56094 29.1007L3.561 29.1004L4.08099 26.7004C6.16699 17.0722 7.21 12.2581 10.267 9.01867C11.262 7.9639 12.396 7.04932 13.638 6.30005C17.1521 4.1793 21.6114 4.01304 30 4V7.00013C26.1629 7.00642 23.2898 7.04433 20.961 7.27227C18.258 7.53678 16.565 8.03732 15.188 8.86858C14.179 9.47736 13.258 10.2205 12.449 11.0775C11.345 12.2477 10.497 13.7957 9.666 16.3815C8.818 19.0215 8.069 22.464 7.013 27.3357L6.493 29.7357C4.936 36.9208 3.829 42.0555 3.437 46.0523C3.049 50.003 3.419 52.3827 4.431 54.2348C5.175 55.5952 6.156 56.8116 7.328 57.8265C8.924 59.2082 11.171 60.0729 15.114 60.5309C18.7879 60.9574 23.5319 60.9953 30 60.9986V63.9986Z"
            fill="url(#paint0_linear_4276_192136)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_4276_192136"
            x1="110"
            y1="4"
            x2="110"
            y2="64"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9B71" />
            <stop offset="1" stopColor="#FF9B71" stopOpacity="0.53" />
          </linearGradient>
          <clipPath id="clip0_4276_192136">
            <rect width="30" height="64" fill="white" transform="matrix(-1 0 0 1 30 0)" />
          </clipPath>
        </defs>
      </svg>
    </TrapezeButtonEdgeWrap>
  )
}
