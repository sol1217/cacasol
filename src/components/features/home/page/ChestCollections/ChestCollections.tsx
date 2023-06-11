import { useState } from 'react'
import Image from 'next/image'

import { SearchInput, Typography } from '@core'
import { useTheme } from '@hooks'
import { CollectionPreview, SectionHeaderWrap } from '@shared'
import { CollectionCard } from '@shared/CollectionCard'
import loadingImage from '@assets/images/loading.png'
import emptySearchResultSadFace from '@assets/svg/empty-search-result-sad-face.svg'

import {
  LoaderWrap,
  CollectionsWrap,
  SearchInputWrap,
  SearchResultWrap,
  ChestCollectionsWrap,
  EmptySearchResultWrap,
} from './ChestCollections.elements'
import { ChestCollectionsProps } from './ChestCollections.types'

export const ChestCollections = ({}: ChestCollectionsProps) => {
  const theme = useTheme()

  const [searchText, setSearchText] = useState('')
  const [searchedChests, setSearchedChests] = useState(1)

  return (
    <ChestCollectionsWrap>
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
      {searchText ? (
        searchedChests ? (
          <SearchResultWrap>
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </SearchResultWrap>
        ) : (
          <EmptySearchResultWrap>
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
          </EmptySearchResultWrap>
        )
      ) : (
        <CollectionsWrap>
          <CollectionPreview
            title="Коллекция Jungli"
            titleFontVariant="headlineMobileHeadline4Bold2028"
            goTo="/collection/1"
          />
          <CollectionPreview
            title="Коллекция Jungli 2"
            titleFontVariant="headlineMobileHeadline4Bold2028"
            goTo="/collection/2"
          />
          <CollectionPreview
            title="Коллекция Jungli 3"
            titleFontVariant="headlineMobileHeadline4Bold2028"
            goTo="/collection/3"
          />
        </CollectionsWrap>
      )}
      {/*<LoaderWrap>
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
    </ChestCollectionsWrap>
  )
}
