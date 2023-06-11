import { Box, Typography } from '@core'
import { CollectionPreview } from '@components/shared'

import { TopChestsWrap } from './TopChests.elements'
import { TopChestsProps } from './TopChests.types'

export const TopChests = ({}: TopChestsProps) => {
  return (
    <TopChestsWrap>
      <Box sx={{ marginBottom: '2px' }}>
        <Typography variant="headlineMobileHeadline3Bold2230">Топ сундуков</Typography>
      </Box>
      <Box sx={{ marginBottom: '22px' }}>
        <Typography variant="bodyMobileHeadlineBody7Regular1420">
          Посмотри на любимые сундуки Дракоши
        </Typography>
      </Box>
      <CollectionPreview
        title="10 бестселлеров"
        titleFontVariant="bodyMobileHeadlineBody8Bold1220"
      />
    </TopChestsWrap>
  )
}
