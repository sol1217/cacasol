import { Box, Icon } from '@core'

export const ClosedIcon = ({
  width = 26,
  height = 16,
  viewBox = '0 0 26 16',
  color = '#2F2F2F',
  inheritedColor = true,
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.41177C0 0.632069 0.632069 0 1.41177 0H24.5882C25.3679 0 26 0.632069 26 1.41177C26 2.19146 25.3679 2.82353 24.5882 2.82353H1.41177C0.63207 2.82353 0 2.19146 0 1.41177ZM0 8.00009C0 7.22039 0.632069 6.58832 1.41177 6.58832H24.5882C25.3679 6.58832 26 7.22039 26 8.00009C26 8.77978 25.3679 9.41185 24.5882 9.41185H1.41177C0.63207 9.41185 0 8.77978 0 8.00009ZM1.41176 13.1764C0.632069 13.1764 0 13.8085 0 14.5882C0 15.3679 0.632069 15.9999 1.41176 15.9999H24.5882C25.3679 15.9999 26 15.3679 26 14.5882C26 13.8085 25.3679 13.1764 24.5882 13.1764H1.41176Z"
          fill={inheritedColor ? 'currentColor' : color}
        />
      </svg>
    </Box>
  )
}
