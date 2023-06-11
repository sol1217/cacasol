import { TextButton, Typography } from '@core'
import { AccordeonElement } from '@core'

import { TABS } from './Faq.types'

export const TABS_TO_SHOW = 6

export const TAB_OPTIONS: TABS[] = [
  TABS.Кошелек,
  TABS.Профиль,
  TABS.Продажа,
  TABS.Питомцы,
  TABS.Очаровательно,
  TABS.Олег,
]

export const ACCORDEON_DATA: Record<TABS, AccordeonElement[]> = {
  Кошелек: [
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 1
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Перейди в раздел{' '}
          <TextButton href="/" variant="orange">
            Кошелек
          </TextButton>{' '}
          и в разделе История операций можно посмотреть последние платежи. Ты можешь применить
          фильтр и посмотреть платежей за любой период.
        </Typography>
      ),
      search: 'Кошельковый вопрос 1',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 2
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 2',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 3
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 3',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 4
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 4',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 5
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 5',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 6
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 6',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 7
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 7',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Кошельковый вопрос 8
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Кошельковый вопрос 8',
    },
  ],
  Профиль: [
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Профильный вопрос 1
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Профильный вопрос 1',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Профильный вопрос 2
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Профильный вопрос 2',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Профильный вопрос 3
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Профильный вопрос 3',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Профильный вопрос 4
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Профильный вопрос 4',
    },
  ],
  Продажа: [
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Продажный вопрос 1
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Продажный вопрос 1',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Продажный вопрос 2
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Продажный вопрос 2',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Продажный вопрос 3
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Продажный вопрос 3',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Продажный вопрос 4
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Продажный вопрос 4',
    },
  ],
  Питомцы: [
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Питомцевый вопрос 1
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Питомцевый вопрос 1',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Питомцевый вопрос 2
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Питомцевый вопрос 2',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Питомцевый вопрос 3
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Питомцевый вопрос 3',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Питомцевый вопрос 4
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Питомцевый вопрос 4',
    },
  ],
  Очаровательно: [
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Очаровательный вопрос 1
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Очаровательный вопрос 1',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Очаровательный вопрос 2
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Очаровательный вопрос 2',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Очаровательный вопрос 3
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Очаровательный вопрос 3',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Очаровательный вопрос 4
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Очаровательный вопрос 4',
    },
  ],
  Олег: [
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Олеговый вопрос 1
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Олеговый вопрос 1',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Олеговый вопрос 2
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Олеговый вопрос 2',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Олеговый вопрос 3
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Олеговый вопрос 3',
    },
    {
      head: (
        <Typography variant="accordionsMobileAccrodionsTitleSemibold1422">
          Олеговый вопрос 4
        </Typography>
      ),
      body: (
        <Typography variant="accordionsMobileAccrodionsTextMedium1218">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus.
        </Typography>
      ),
      search: 'Олеговый вопрос 4',
    },
  ],
}
