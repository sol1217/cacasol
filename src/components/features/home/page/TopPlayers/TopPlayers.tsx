import { Box, TextButton, Typography } from '@core'
import { useTheme } from '@hooks'
import { TopPlayerCard, SectionHeaderWrap } from '@shared'
import { colors } from '@styles/colors'

import { CardsWrap } from './TopPlayers.elements'
import { TopPlayersProps } from './TopPlayers.types'

export const TopPlayers = ({}: TopPlayersProps) => {
  const theme = useTheme()

  return (
    <Box sx={{ paddingTop: '24px' }}>
      <SectionHeaderWrap>
        <Typography
          variant="headlineMobileHeadline3Bold2230"
          color={theme.palette.topPlayers.sectionTitleColor}>
          Топ игроков
        </Typography>
        <Typography
          variant="bodyMobileHeadlineBody7Regular1420"
          color={theme.palette.topPlayers.sectionSubtitleColor}>
          Игроки, которые открыли больше всего сундуков
        </Typography>
      </SectionHeaderWrap>
      <CardsWrap>
        <TopPlayerCard primaryColor={colors.frigidity} secondaryColor={colors.lightBlue} />
        <TopPlayerCard primaryColor={colors.orangeGold} secondaryColor={colors.solar} />
        <TopPlayerCard primaryColor={colors.carmine} secondaryColor={colors.lightRed} />
      </CardsWrap>
      <Box>
        <TextButton href="/" variant="orangeUnderlined14px">
          Смотреть все
        </TextButton>
      </Box>
    </Box>
  )
}
