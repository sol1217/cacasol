import Image from 'next/image'

import BackgroundPattern from '@assets/svg/gamble-setting-case-preview-background-pattern.svg'

import { Stand, GambleSettingCasePreviewCardWrap } from './GambleSettingCasePreviewCard.elements'
import { GambleSettingCasePreviewCardProps } from './GambleSettingCasePreviewCard.types'

export const GambleSettingCasePreviewCard = ({
  size,
  image,
  backgroundColor,
  standColor,
  boxShadow,
}: GambleSettingCasePreviewCardProps) => {
  return (
    <GambleSettingCasePreviewCardWrap
      $width={size === 'medium' ? 214 : 104}
      $height={size === 'medium' ? 256 : 126}
      $color={backgroundColor}
      $boxShadow={boxShadow}>
      <Image
        src={image.src}
        alt=""
        width={size === 'medium' ? 164 : 80}
        height={size === 'medium' ? 163 : 80}
        style={{ zIndex: 3 }}
      />
      <Stand
        $width={size === 'medium' ? 276 : 134}
        $height={size === 'medium' ? 123 : 60}
        $color={standColor}
      />
      <Image
        src={BackgroundPattern.src}
        alt=""
        width={size === 'medium' ? 214 : 104}
        height={size === 'medium' ? 256 : 126}
        style={{ position: 'absolute', right: 0 }}
      />
    </GambleSettingCasePreviewCardWrap>
  )
}
