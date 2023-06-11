import { useState } from 'react'
import Image from 'next/image'
import {
  format,
  getDay,
  getDate,
  isEqual,
  setDate,
  addMonths,
  subMonths,
  startOfMonth,
  getDaysInMonth,
} from 'date-fns'
import { chunk } from 'lodash'
import { ru } from 'date-fns/locale'

import { Box, Typography } from '@core'
import calendarArrow from '@assets/svg/calendar-arrow.svg'

import { WEEKDAYS } from './CalendarElement.constants'
import {
  CalendarElementWrap,
  CalendarElementTable,
  CalendarElementHeader,
  CalendarElementTableCell,
} from './CalendarElement.elements'
import { CalendarElementProps } from './CalendarElement.types'

export const CalendarElement = ({ date, dateSelectionHandler }: CalendarElementProps) => {
  const [showingPeriodDate, setShowingPeriodDate] = useState(date)

  const generateShowingPeriodTitle = (date: Date) => {
    const title = format(date, 'LLLL, yyyy', { locale: ru })

    return title.charAt(0).toUpperCase() + title.slice(1)
  }

  const setPreviousMonth = () => {
    const previousMonth = subMonths(showingPeriodDate, 1)
    setShowingPeriodDate(startOfMonth(previousMonth))
  }

  const setNextMonth = () => {
    const nextMonth = addMonths(showingPeriodDate, 1)
    setShowingPeriodDate(startOfMonth(nextMonth))
  }

  const generateMonth = () => {
    const daysInMonth = getDaysInMonth(showingPeriodDate)
    const startWeekday = getDay(startOfMonth(showingPeriodDate))
    const daysArray: Array<Date | null> = [
      ...Array.from<null>({ length: startWeekday - 1 }).fill(null),
      ...Array.from({ length: daysInMonth }, (_, index) => setDate(showingPeriodDate, index + 1)),
    ]

    return chunk(daysArray, 7)
  }

  return (
    <CalendarElementWrap>
      <CalendarElementHeader>
        <Image
          onClick={setPreviousMonth}
          src={calendarArrow.src}
          alt=""
          width={20}
          height={20}
          style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}
        />
        <Typography variant="bodyMobileHeadlineBody5Bold1422">
          {generateShowingPeriodTitle(showingPeriodDate)}
        </Typography>
        <Image
          onClick={setNextMonth}
          src={calendarArrow.src}
          alt=""
          width={20}
          height={20}
          style={{ cursor: 'pointer' }}
        />
      </CalendarElementHeader>
      <CalendarElementTable>
        <thead>
          <tr>
            {WEEKDAYS.map((weekday) => (
              <th key={`calendar-element-weekdays-header-${weekday}`}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateMonth().map((week, index) => (
            <tr key={`calendar-element-week-row-${index}`}>
              {week.map((day, index) => (
                <CalendarElementTableCell
                  onClick={() => day && dateSelectionHandler(day)}
                  key={`calendar-element-day-cell-${index}`}
                  $isSelected={day ? isEqual(date, day) : false}>
                  {day ? getDate(day) : ' '}
                </CalendarElementTableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarElementTable>
    </CalendarElementWrap>
  )
}
