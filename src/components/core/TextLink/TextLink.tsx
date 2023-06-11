import Link from 'next/link'

import { TextLinkWrap } from './TextLink.elements'
import { TextLinkProps } from './TextLink.types'

export const TextLink = ({ href, children }: TextLinkProps) => {
  return (
    <Link href={href}>
      <TextLinkWrap>{children}</TextLinkWrap>
    </Link>
  )
}
