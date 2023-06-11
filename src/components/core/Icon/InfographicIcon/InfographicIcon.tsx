import Image from 'next/image'

import { InfographicIconWrap } from './InfographicIcon.elements'
import { infographicIconStyle } from './InfographicIcon.styles'
import { InfographicIconProps } from './InfographicIcon.types'

export const InfographicIcon = ({ variant, sx }: InfographicIconProps) => {
  const style = infographicIconStyle[variant]

  return (
    <InfographicIconWrap
      style={sx}
      $backgroundColor={style.backgroundColor}
      $outlineColor={style.shape === 'circle' ? style.outlineColor : undefined}
      $shape={style.shape}>
      <Image src={style.image.src} width={style.imageWidth} height={style.imageHeight} alt="" />
    </InfographicIconWrap>
  )
}
