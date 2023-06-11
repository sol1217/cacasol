import { useState } from 'react'
import Image from 'next/image'

import { SearchInput, Typography } from '@core'
import { useTheme } from '@hooks'
import { CollectionCard, SectionHeaderWrap } from '@shared'
import loadingImage from '@assets/images/loading.png'
import emptySearchResultSadFace from '@assets/svg/empty-search-result-sad-face.svg'

import {
  ChestsWrap,
  LoaderWrap,
  SearchInputWrap,
  CollectionCardsWrap,
  EmptySearchResultWrap,
} from './Chests.elements'
import { ChestsProps } from './Chests.types'

export const Chests = ({}: ChestsProps) => {
  const theme = useTheme()

  const [searchText, setSearchText] = useState('')
  const [searchedChests, setSearchedChests] = useState(1)

  return (
    <ChestsWrap>
      <SectionHeaderWrap>
        <Typography
          variant="headlineMobileHeadline3Bold2230"
          color={theme.palette.topPlayers.sectionTitleColor}>
          Коллекции сундуков
        </Typography>
        <Typography
          variant="bodyMobileHeadlineBody7Regular1420"
          color={theme.palette.topPlayers.sectionSubtitleColor}>
          Собери всех уникальных и редких питомцев
        </Typography>
      </SectionHeaderWrap>
      <SearchInputWrap>
        <SearchInput
          value={searchText}
          onChange={setSearchText}
          placeholder="Найди сундук с нужным питомцем"
        />
      </SearchInputWrap>
      <CollectionCardsWrap>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </CollectionCardsWrap>
      {/*<EmptySearchResultWrap>
        <Image
          src={emptySearchResultSadFace.src}
          width={emptySearchResultSadFace.width}
          height={emptySearchResultSadFace.height}
          alt=""
        />
        <Typography
          variant="bodyMobileHeadlineBody6Medium1418"
          color={theme.palette.chestCollections.emptySearchResult.color}>
          У нас нет сундуков для твоего запроса
        </Typography>
      </EmptySearchResultWrap>*/}
      {/* <LoaderWrap>
        <Image
          src={loadingImage.src}
          width={loadingImage.width}
          height={loadingImage.height}
          alt=""
        />
        <Typography
          variant="bodyMobileHeadlineBody6Medium1418"
          color={theme.palette.chestCollections.emptySearchResult.color}>
          Идет поиск...
        </Typography>
      </LoaderWrap>*/}
    </ChestsWrap>
  )
}
