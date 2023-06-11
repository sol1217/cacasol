import { motion, useAnimation, useMotionValue } from 'framer-motion'

import { PetCardMini } from '../PetCardMini'
import { OpenedCasesLiveFeedWrap } from './OpenedCasesLiveFeed.elements'
import { OpenedCasesLiveFeedProps } from './OpenedCasesLiveFeed.types'

export const OpenedCasesLiveFeed = ({ petCards }: OpenedCasesLiveFeedProps) => {
  const animationControls = useAnimation()
  const initialSliderPosition = useMotionValue(28)

  return (
    <OpenedCasesLiveFeedWrap>
      <motion.div
        animate={animationControls}
        dragElastic={0.3}
        style={{ display: 'flex', flexDirection: 'row', gap: '6px', x: initialSliderPosition }}>
        {petCards.map((petCard, index) => (
          <PetCardMini
            key={index}
            onClick={petCard.onClick}
            avatar={petCard.avatar}
            tags={petCard.tags}
            gradient={petCard.gradient}
          />
        ))}
      </motion.div>
    </OpenedCasesLiveFeedWrap>
  )
}
