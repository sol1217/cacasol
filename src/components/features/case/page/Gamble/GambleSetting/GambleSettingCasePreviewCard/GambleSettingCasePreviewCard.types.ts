import { StaticImageData } from 'next/image'

export type GambleSettingCasePreviewCardProps = {
  size: GambleSettingCasePreviewCardSize
  image: StaticImageData
  backgroundColor: string
  standColor: string
  boxShadow: string
}

type GambleSettingCasePreviewCardSize = 'medium' | 'small'
