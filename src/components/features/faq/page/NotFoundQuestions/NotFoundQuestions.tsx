import { Box, Typography, PrimaryButton } from '@core'

import { NotFoundQuestionsWrap } from './NotFoundQuestions.elements'

export const NotFoundQuestions = () => {
  return (
    <NotFoundQuestionsWrap>
      <Box>
        <Typography variant="headlineMobileHeadline4Bold2028">
          Не нашел ответ на свой вопрос?
        </Typography>
        <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959E">
          Дракоша поможет найти его
        </Typography>
      </Box>
      <PrimaryButton variant="chatBig">Начать чат с Дракошей</PrimaryButton>
    </NotFoundQuestionsWrap>
  )
}
