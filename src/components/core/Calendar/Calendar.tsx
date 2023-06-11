import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { createPortal } from 'react-dom'
import { ru } from 'date-fns/locale'

import { Typography } from '@core'
import calendarIcon from '@assets/svg/calendar-icon.svg'

import { CalendarElement } from '././CalendarElement'
import { CalendarElementHolder, CalendarSelectedDateHolder } from './Calendar.elements'
import { CalendarProps } from './Calendar.types'
import { locateCalendar } from './Calendar.utils'

export const Calendar = ({ date, dateSelectionHandler }: CalendarProps) => {
  const selectedDateHolderRef = useRef<HTMLDivElement | null>(null)
  const calendarRef = useRef<HTMLDivElement | null>(null)

  const [selectedDate, setSelectedDate] = useState(date)
  const [isOpen, setIsOpen] = useState(false)
  const [portalContainer, setPortalContainer] = useState<Element | null>(null)

  useEffect(() => {
    setPortalContainer(document.querySelector('#__next'))
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timer

    const mouseDownHandler = (e: any) => {
      if (
        !calendarRef.current?.contains(e.target) &&
        !selectedDateHolderRef.current?.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    if (!selectedDateHolderRef.current) throw Error('No select head element')

    if (isOpen && calendarRef.current) {
      locateCalendar(selectedDateHolderRef.current, calendarRef.current)

      window.addEventListener('mousedown', mouseDownHandler)

      interval = setInterval(() => {
        if (selectedDateHolderRef.current && calendarRef.current) {
          locateCalendar(selectedDateHolderRef.current, calendarRef.current)
        }
      }, 50)
    } else if (calendarRef.current) {
      calendarRef.current.style.display = 'none'
    }

    return () => {
      window.removeEventListener('mousedown', mouseDownHandler)
      clearInterval(interval)
    }
  }, [isOpen])

  const onClickHandler = (date: Date) => {
    setSelectedDate(date)
    dateSelectionHandler(date)

    setIsOpen(false)
  }

  const generateSelectedDateText = (date: Date) => {
    const textArray = format(date, 'd MMM yyyy', { locale: ru }).split(' ')
    textArray[1] = textArray[1].charAt(0).toUpperCase() + textArray[1].slice(1).replace('.', '')

    return textArray.join(' ')
  }

  return (
    <>
      <CalendarSelectedDateHolder ref={selectedDateHolderRef} onClick={() => setIsOpen(!isOpen)}>
        <Image src={calendarIcon.src} width={18} height={20.75} alt="" />
        <Typography variant="bodyMobileHeadlineBody3Medium1624">
          {generateSelectedDateText(selectedDate)}
        </Typography>
      </CalendarSelectedDateHolder>
      {portalContainer &&
        createPortal(
          <>
            {isOpen && (
              <CalendarElementHolder ref={calendarRef}>
                <CalendarElement date={selectedDate} dateSelectionHandler={onClickHandler} />
              </CalendarElementHolder>
            )}
          </>,
          portalContainer,
        )}
    </>
  )
}
