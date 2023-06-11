import { Typography, SocialMediaButton } from '@core'

import { SocialButtonsWrap, SocialLinksInWrap } from './SocialLinksIn.elements'
import { SocialLinksInProps } from './SocialLinksIn.types'

export const SocialLinksIn = ({}: SocialLinksInProps) => {
  return (
    <SocialLinksInWrap>
      <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959e">
        через социальные сети
      </Typography>
      <SocialButtonsWrap>
        <SocialMediaButton iconName="discord" />
        <SocialMediaButton iconName="google" />
        <SocialMediaButton iconName="vk" />
      </SocialButtonsWrap>
    </SocialLinksInWrap>
  )
}
