import Image from 'next/image'

import { Box, Typography } from '@core'
import promocodeInputCheckMark from '@assets/svg/promocode-input-check-mark.svg'

import { PromocodeInputTextButtonVariant } from './../PromocodeInputTextButton/PromocodeInputTextButton.types'
import { PromocodeInputTextButton } from './../PromocodeInputTextButton'
import { PromocodeInputCardWrap } from './PromocodeInputCard.elements'
import { PromocodeInputCardProps } from './PromocodeInputCard.types'

export const PromocodeInputCard = ({
  promocodeValue,
  onChangeButtonClick,
}: PromocodeInputCardProps) => {
  return (
    <PromocodeInputCardWrap>
      <Box sx={{ m: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ m: 0, display: 'flex', flexDirection: 'row', gap: '4px' }}>
          <Image src={promocodeInputCheckMark.src} width={10} height={10} alt="" />
          <Typography variant="inputMobileInputsText3Medium1414" color="#3AC080">
            промокод
          </Typography>
        </Box>
        <Typography variant="inputMobileInputsText2Medium1624">SPACECASE29800</Typography>
        <PromocodeInputTextButton
          onClick={onChangeButtonClick}
          variant={PromocodeInputTextButtonVariant.ChangePromocode}
        />
      </Box>
      <Box sx={{ m: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Typography variant="headlineMobileHeadline4Bold2028">{promocodeValue} ₽</Typography>
        <Typography variant="bodyMobileHeadlineBody9Medium1218" color="#86959E">
          Бонус к пополнению
        </Typography>
      </Box>
    </PromocodeInputCardWrap>
  )
}
