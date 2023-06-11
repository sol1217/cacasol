import { CardBaseProps } from './TopPlayerCard.types'

export const CardBase = ({ color }: CardBaseProps) => {
  return (
    <svg
      width="117"
      height="144"
      viewBox="0 0 117 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0404 17.9869C32.7784 13.9791 39.7608 22.5283 49.6912 7.29389C52.129 3.55413 55.0047 1 58.5 1C62.8338 1 66.7336 4.92662 70.133 10.1713C79.1877 24.1411 85.7214 14.3179 101.96 17.9869V17.9869C107.367 19.2086 110.07 19.8195 112.791 22.1957C113.541 22.8504 114.543 23.9933 115.074 24.7988C117 27.7222 117 30.6556 117 36.5223V119.868C117 122.924 116.488 125.045 115.695 126.615C113.723 130.516 112.251 139.217 108.576 141.583V141.583C104.599 144.143 95.7396 143.999 84.3934 143.999H77.6803C71.9262 143.999 78.2302 143.999 72.8852 143.999H58.9795H43.6352C38.2903 143.999 39.3197 143.999 32.6066 143.999C21.2604 143.999 12.401 144.143 8.424 141.583C7.1396 140.756 7.16969 135.958 6.23653 134.82C3.34709 131.296 0 129.921 0 119.868V36.5223C0 30.6556 0 27.7222 1.92621 24.7988C2.45691 23.9933 3.45912 22.8504 4.20879 22.1957C6.92979 19.8195 9.63332 19.2086 15.0404 17.9869V17.9869Z"
        fill={color}
      />
      <mask id="mask0_2888_117594" maskUnits="userSpaceOnUse" x="0" y="0" width="117" height="144">
        <path
          d="M28.6141 14.624C31.8849 14.1595 34.6715 12.1117 36.8152 9.59803C41.7895 3.76525 49.652 0 58.5 0C67.348 0 75.2105 3.76525 80.1848 9.59802C82.3285 12.1117 85.1151 14.1595 88.3859 14.624C93.6011 15.3648 98.1342 16.2355 101.96 17.1059C107.367 18.3362 110.07 18.9513 112.791 21.3442C113.541 22.0034 114.543 23.1543 115.074 23.9654C117 26.9094 117 29.8633 117 35.7711V119.7C117 129.824 117 134.886 114.111 138.435C113.177 139.581 112.048 140.589 110.763 141.422C107.32 143.654 101.847 143.954 93.074 143.994C90.4972 144.006 88.2054 142.355 87.3842 139.912L85.2946 133.697C83.7587 129.128 79.0466 126 73.7016 126H43.2984C37.9535 126 33.2413 129.128 31.7054 133.697L29.6158 139.912C28.7946 142.355 26.5028 144.006 23.926 143.994C15.1527 143.954 9.68048 143.654 6.23653 141.422C4.95213 140.589 3.8226 139.581 2.88944 138.435C0 134.886 0 129.824 0 119.7V35.7711C0 29.8633 0 26.9094 1.92621 23.9654C2.45691 23.1543 3.45912 22.0034 4.20879 21.3442C6.92979 18.9513 9.63332 18.3362 15.0404 17.1059C18.8658 16.2355 23.3989 15.3648 28.6141 14.624Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2888_117594)">
        <path
          d="M28.6141 14.624C31.8849 14.1595 34.6715 12.1117 36.8152 9.59803C41.7895 3.76525 49.652 0 58.5 0C67.348 0 75.2105 3.76525 80.1848 9.59802C82.3285 12.1117 85.1151 14.1595 88.3859 14.624C93.6011 15.3648 98.1342 16.2355 101.96 17.1059C107.367 18.3362 110.07 18.9513 112.791 21.3442C113.541 22.0034 114.543 23.1543 115.074 23.9654C117 26.9094 117 29.8633 117 35.7711V119.7C117 129.824 117 134.886 114.111 138.435C113.177 139.581 112.048 140.589 110.763 141.422C107.32 143.654 101.847 143.954 93.074 143.994C90.4972 144.006 88.2054 142.355 87.3842 139.912L85.2946 133.697C83.7587 129.128 79.0466 126 73.7016 126H43.2984C37.9535 126 33.2413 129.128 31.7054 133.697L29.6158 139.912C28.7946 142.355 26.5028 144.006 23.926 143.994C15.1527 143.954 9.68048 143.654 6.23653 141.422C4.95213 140.589 3.8226 139.581 2.88944 138.435C0 134.886 0 129.824 0 119.7V35.7711C0 29.8633 0 26.9094 1.92621 23.9654C2.45691 23.1543 3.45912 22.0034 4.20879 21.3442C6.92979 18.9513 9.63332 18.3362 15.0404 17.1059C18.8658 16.2355 23.3989 15.3648 28.6141 14.624Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M94.6482 58.648L88.1186 69.1719C85.2915 73.7284 80.3101 76.5 74.9478 76.5H42.0523C36.6899 76.5 31.7085 73.7284 28.8814 69.1719L22.3518 58.648C20.7345 56.0413 18.0582 54.2723 15.0263 53.8058L0.5 51.571V-14.5H39.4875H78H116.5V51.571L101.974 53.8058C98.9418 54.2723 96.2655 56.0413 94.6482 58.648Z"
          fill="#EEF5F9"
          stroke="#D4DEE3"
        />
        <path
          d="M28.6141 14.624C31.8849 14.1595 34.6715 12.1117 36.8152 9.59803C41.7895 3.76525 49.652 0 58.5 0C67.348 0 75.2105 3.76525 80.1848 9.59802C82.3285 12.1117 85.1151 14.1595 88.3859 14.624C93.6011 15.3648 98.1342 16.2355 101.96 17.1059C107.367 18.3362 110.07 18.9513 112.791 21.3442C113.541 22.0034 114.543 23.1543 115.074 23.9654C117 26.9094 117 29.8633 117 35.7711V119.7C117 129.824 117 134.886 114.111 138.435C113.177 139.581 112.048 140.589 110.763 141.422C107.32 143.654 101.847 143.954 93.074 143.994C90.4972 144.006 88.2054 142.355 87.3842 139.912L85.2946 133.697C83.7587 129.128 79.0466 126 73.7016 126H43.2984C37.9535 126 33.2413 129.128 31.7054 133.697L29.6158 139.912C28.7946 142.355 26.5028 144.006 23.926 143.994C15.1527 143.954 9.68048 143.654 6.23653 141.422C4.95213 140.589 3.8226 139.581 2.88944 138.435C0 134.886 0 129.824 0 119.7V35.7711C0 29.8633 0 26.9094 1.92621 23.9654C2.45691 23.1543 3.45912 22.0034 4.20879 21.3442C6.92979 18.9513 9.63332 18.3362 15.0404 17.1059C18.8658 16.2355 23.3989 15.3648 28.6141 14.624Z"
          fill="white"
        />
        <path
          d="M96.328 60.9575L95.0882 65.2404C93.2004 71.7618 87.2288 76.25 80.4396 76.25H36.5604C29.7712 76.25 23.7996 71.7618 21.9118 65.2404L20.672 60.9575C19.5029 56.9188 16.0865 53.9323 11.9277 53.3136L-1.25 51.3533V-14.25H38.8375H78.6667H118.25V51.3533L105.072 53.3136C100.913 53.9323 97.4971 56.9188 96.328 60.9575Z"
          fill="#E3EDF2"
          stroke="#D4DEE3"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}