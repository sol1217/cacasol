import { HeroWithRoundIconWrap } from './HeroWithRoundIcon.elements'
import { HeroWithRoundIconProps } from './HeroWithRoundIcon.types'

export const HeroWithRoundIcon = ({ children }: HeroWithRoundIconProps) => {
  return <HeroWithRoundIconWrap>{children}</HeroWithRoundIconWrap>
}
