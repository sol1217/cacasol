import leoImage from '@assets/images/pet-card-avatar-leo.png'
import monkeyImage from '@assets/images/pet-card-avatar-monkey.png'
import parrotImage from '@assets/images/pet-card-avatar-parrot.png'
import pigImage from '@assets/images/pet-card-avatar-pig.png'

import { CaseItem } from './GambleSlider/GambleSlider.types'
import { HeroWrap } from './Gamble.elements'
import { HeroProps } from './Gamble.types'
import { GambleSlider } from './GambleSlider'

const caseItems: CaseItem[] = [
  {
    name: 'Непобедимый папуг',
    price: 666,
    image: parrotImage.src,
    gradient: 'grape',
    tags: ['M', 'R'],
  },
  {
    name: 'Неотразимый лев',
    price: 777,
    image: leoImage.src,
    gradient: 'sea',
    tags: ['F', 'N'],
  },
  {
    name: 'Супер макака',
    price: 888,
    image: monkeyImage.src,
    gradient: 'orange',
    tags: ['N', 'M', 'R'],
  },
  {
    name: 'Боевая свинья',
    price: 999,
    image: pigImage.src,
    gradient: 'sea',
    tags: ['N', 'R'],
  },
]

export const Gamble = ({}: HeroProps) => {
  return (
    <HeroWrap>
      <GambleSlider caseItems={caseItems} />
    </HeroWrap>
  )
}
