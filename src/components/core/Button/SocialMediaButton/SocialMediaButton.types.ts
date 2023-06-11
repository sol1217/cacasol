import { SocialMediaIconName } from '@styles'

export type SocialMediaButtonProps = {
  onClick?: () => void
  href?: string
  iconName: SocialMediaIconName
}
