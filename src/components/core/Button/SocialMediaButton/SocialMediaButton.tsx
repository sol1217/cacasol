import Image from 'next/image'
import Link from 'next/link'

import { SocialMediaIconName } from '@styles'
import discordIcon from '@assets/svg/discord-colored-social-icon.svg'
import googleIcon from '@assets/svg/google-colored-social-icon.svg'
import vkIcon from '@assets/svg/vk-colored-social-icon.svg'

import { SocialMediaButtonWrap } from './SocialMediaButton.elements'
import { SocialMediaButtonProps } from './SocialMediaButton.types'

export const SocialMediaButton = ({ onClick, href, iconName }: SocialMediaButtonProps) => {
  const generateIcon = (iconName: SocialMediaIconName) => {
    switch (iconName) {
      case 'discord':
        return discordIcon
      case 'google':
        return googleIcon
      case 'vk':
        return vkIcon
      default:
        return null
    }
  }

  const icon = generateIcon(iconName)

  return (
    <SocialMediaButtonWrap as={href === undefined ? 'button' : Link} href={href} onClick={onClick}>
      <Image src={icon.src} width={icon.width} height={icon.height} alt="" />
    </SocialMediaButtonWrap>
  )
}
