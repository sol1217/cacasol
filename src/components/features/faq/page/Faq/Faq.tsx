import { useMemo, useState } from 'react'
import Image from 'next/image'
import Fuse from 'fuse.js'

import {
  Box,
  Tabs,
  Accordeon,
  Typography,
  SearchInput,
  SecondaryButton,
  AccordeonElement,
} from '@core'
import emptySearchResultSadFace from '@assets/svg/empty-search-result-sad-face.svg'

import { TAB_OPTIONS, TABS_TO_SHOW, ACCORDEON_DATA } from './Faq.constants'
import {
  FaqWrap,
  TabsWrap,
  ShowAllButton,
  ShowAllButtonWrap,
  EmptySearchResultWrap,
} from './Faq.elements'
import { ShowAllButtonBackground } from './ShowAllButtonBackground'

export const Faq = () => {
  const [searchValue, setSearchValue] = useState('')
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [showAllQuestions, setShowAllQuestions] = useState(false)

  const filteredAccordeonData = useMemo(() => {
    if (searchValue === '') return ACCORDEON_DATA[TAB_OPTIONS[activeTabIndex]]

    const data = ([] as AccordeonElement[]).concat(...Object.values(ACCORDEON_DATA))

    const options = {
      includeScore: true,
      keys: ['search'],
    }

    const fuse = new Fuse(data, options)

    const result = fuse.search(searchValue)

    return result.map((el) => el.item)
  }, [searchValue, activeTabIndex])

  const accordeonData = useMemo(() => {
    const data = filteredAccordeonData

    if (!showAllQuestions) return data.slice(0, TABS_TO_SHOW)

    return data
  }, [showAllQuestions, filteredAccordeonData])

  const accordeonChangeHandler = (index: number) => {
    setActiveTabIndex(index)
    setShowAllQuestions(false)
  }

  return (
    <FaqWrap>
      <Box sx={{ marginBottom: '24px' }}>
        <SearchInput
          value={searchValue}
          placeholder="Найди свой вопрос"
          onChange={setSearchValue}
        />
      </Box>

      {!searchValue && (
        <Box sx={{ marginBottom: '24px' }}>
          <TabsWrap>
            <Tabs
              tabs={TAB_OPTIONS}
              onChange={accordeonChangeHandler}
              activeTabIndex={activeTabIndex}
            />
          </TabsWrap>
        </Box>
      )}

      {accordeonData.length > 0 && <Accordeon data={accordeonData} />}

      {accordeonData.length < 1 && searchValue && (
        <EmptySearchResultWrap>
          <Box sx={{ marginBottom: '12px' }}>
            <Image
              src={emptySearchResultSadFace.src}
              width={emptySearchResultSadFace.width}
              height={emptySearchResultSadFace.height}
              alt=""
            />
          </Box>

          <Box sx={{ marginBottom: '18px' }}>
            <Typography variant="headlineMobileHeadline5Bold1826">
              У нас нет ответов на твой вопрос
            </Typography>
            <Typography variant="bodyMobileHeadlineBody6Medium1418" color="#86959E">
              Но ты можешь задать вопрос Дракоше
            </Typography>
          </Box>

          <SecondaryButton variant="whiteOutlined148px">Написать в чат</SecondaryButton>
        </EmptySearchResultWrap>
      )}

      {!showAllQuestions && filteredAccordeonData.length > TABS_TO_SHOW && (
        <ShowAllButtonWrap>
          <ShowAllButton onClick={() => setShowAllQuestions(true)}>
            <Typography variant="textButtonMobileTextButton2Bold1422">Смотреть все</Typography>
            <ShowAllButtonBackground />
          </ShowAllButton>
        </ShowAllButtonWrap>
      )}
    </FaqWrap>
  )
}
