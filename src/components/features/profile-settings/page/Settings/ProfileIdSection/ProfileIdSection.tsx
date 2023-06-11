import Image from 'next/image'

import { Typography } from '@core'
import copyIcon from '@assets/svg/copy-icon.svg'

import { CopyField, ProfileIdSectionWrap } from './ProfileIdSection.elements'

export const ProfileIdSection = () => {
  const ID = 're54DFhk435nnr3GDGK3kfjFKW'

  const copyFieldHandler = () => {
    navigator.clipboard.writeText(ID)
  }

  return (
    <ProfileIdSectionWrap>
      <CopyField onClick={copyFieldHandler}>
        <Typography variant="inputMobileInputsText2Medium1624">{ID}</Typography>
        <Image src={copyIcon.src} height={copyIcon.height} width={copyIcon.width} alt="" />
      </CopyField>
    </ProfileIdSectionWrap>
  )
}
