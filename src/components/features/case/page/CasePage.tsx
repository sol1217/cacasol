import { useState } from 'react'

import { TextButton, Typography } from '@core'
import { useTheme } from '@hooks'
import { PetCard, SectionHeaderWrap } from '@shared'
import avatar from '@assets/images/pet-card-avatar-parrot.png'
import { PetCardTag, PetCategory } from '@shared/PetCard/PetCard.types'
import { Gamble } from '@features/case/page/Gamble'

import { ChestsWrap, CasePageWrap, ShowAllButton, ShowAllButtonWrap } from './CasePage.elements'
import { ShowAllButtonBackground } from './ShowAllButtonBackground'

const petCards = [...new Array(30)].map((_, index) => ({
  id: `${index}`,
  name: 'Case ' + (index + 1),
  avatar: avatar.src,
  price: 399 + index * 10,
  dropChance: 40 - index,
  tags: ['F', 'R'] as PetCardTag[],
  category: 1 as PetCategory,
}))

export const CasePage = () => {
  const theme = useTheme()

  const [isShowAllPetCards, setIsShowAllPetCards] = useState(false)

  return (
    <CasePageWrap>
      <Gamble />
      <SectionHeaderWrap>
        <Typography
          variant="headlineMobileHeadline3Bold2230"
          color={theme.palette.topPlayers.sectionTitleColor}>
          Возможный состав сундука:
        </Typography>
        <Typography
          variant="bodyMobileHeadlineBody7Regular1420"
          color={theme.palette.topPlayers.sectionSubtitleColor}>
          Редкие и уникальные питомцы
        </Typography>
      </SectionHeaderWrap>
      <ChestsWrap>
        {petCards.slice(0, isShowAllPetCards ? petCards.length : 9).map((petCard) => (
          <PetCard key={petCard.id} {...petCard} />
        ))}
      </ChestsWrap>
      {petCards.length > 9 && !isShowAllPetCards && (
        <ShowAllButtonWrap>
          <ShowAllButton onClick={() => setIsShowAllPetCards(true)}>
            <TextButton variant="viewAllArrowDown">Смотреть все</TextButton>
            <ShowAllButtonBackground />
          </ShowAllButton>
        </ShowAllButtonWrap>
      )}
    </CasePageWrap>
  )
}
