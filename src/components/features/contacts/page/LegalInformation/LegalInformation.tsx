import Link from 'next/link'

import { Box, Typography } from '@core'

import { LegalInformationWrap } from './LegalInformation.elements'

export const LegalInformation = () => {
  return (
    <LegalInformationWrap>
      <Box sx={{ gap: '24px', marginBottom: '20px' }}>
        <Box sx={{ gap: '8px', alignItems: 'flex-start' }}>
          <Typography variant="bodyMobileHeadlineBody2Bold1616">BENEFICIARY:</Typography>
          <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
            CRYSTAL FUTURE OU
          </Typography>
        </Box>

        <Box sx={{ gap: '8px', alignItems: 'flex-start' }}>
          <Typography variant="bodyMobileHeadlineBody2Bold1616">REG. NUMBER:</Typography>
          <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
            14198230
          </Typography>
        </Box>

        <Box sx={{ gap: '8px', alignItems: 'flex-start' }}>
          <Typography variant="bodyMobileHeadlineBody2Bold1616">BENEFICIARY’S ADDRESS:</Typography>
          <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
            HARJU MAAKOND, TALLINN, KESKLINNA LINNAOSA, PIKK TN 7-5, 10123
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginBottom: '18px', alignItems: 'flex-start' }}>
        <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#86959e">
          © 2022 STARCASE.GG All Rights Reserved
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '10px', alignItems: 'flex-start' }}>
        <Link href="/">
          <Typography variant="bodyMobileHeadlineBody6Medium1418">
            Политика конфиденциальности
          </Typography>
        </Link>
      </Box>

      <Link href="/">
        <Typography variant="bodyMobileHeadlineBody6Medium1418">Правила пользования</Typography>
      </Link>
    </LegalInformationWrap>
  )
}
