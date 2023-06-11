import { Box, Typography, PrimaryButton } from '@core'

import { HaveQuestionsWrap } from './HaveQuestions.elements'

export const HaveQuestions = () => {
  return (
    <HaveQuestionsWrap>
      <Box>
        <Typography variant="headlineMobileHeadline4Bold2028">Остались вопросы?</Typography>
        <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959E">
          Дракоша поможет найти ответы
        </Typography>
      </Box>
      <PrimaryButton variant="chatBig">Начать чат с Дракошей</PrimaryButton>
    </HaveQuestionsWrap>
  )
}
