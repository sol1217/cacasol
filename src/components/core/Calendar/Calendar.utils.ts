import { CALENDAR_TOP_OFFSET } from './Calendar.constants'

export const locateCalendar = (head: HTMLDivElement, calendar: HTMLDivElement) => {
  const headCoords = head.getBoundingClientRect()
  const headTop = headCoords.top + window.scrollY
  const headLeft = headCoords.left + window.scrollX

  const bottomBorder = window.scrollY + window.innerHeight

  calendar.style.display = 'flex'
  calendar.style.width = `329px`
  calendar.style.left = `${headLeft}px`
  calendar.style.top = `${headTop + head.offsetHeight + CALENDAR_TOP_OFFSET}px`

  const dropdownCoords = calendar.getBoundingClientRect()
  const dropdownBottom = dropdownCoords.bottom + window.scrollY

  if (dropdownBottom > bottomBorder) {
    calendar.style.top = `${headTop - CALENDAR_TOP_OFFSET - dropdownCoords.height}px`
  }
}
