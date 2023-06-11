import styled from 'styled-components'

export const CalendarElementWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 329px;
  border-radius: 16px;
  outline: 1.5px solid ${({ theme }) => theme.palette.dropdown.calendar.stroke};
`

export const CalendarElementTable = styled.table.attrs({
  role: 'grid',
})`
  background-color: ${({ theme }) =>
    theme.palette.dropdown.calendar.backgroundCalendarCalendarWhite};
  padding: 16px 25.5px;
  width: 278px;

  thead > tr {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 9px;
  }

  thead > tr > th {
    display: flex;
    width: 32px;
    height: 20px;
    justify-content: center;
    align-items: center;
    font-family: Gilroy, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
    color: ${({ theme }) => theme.palette.dropdown.calendar.blueText};
  }

  tbody {
    display: flex;
    flex-direction: column;
  }

  tbody > tr {
    display: flex;
    flex-direction: row;
    gap: 9px;
  }
`

export const CalendarElementTableCell = styled.td<{ $isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.palette.dropdown.calendar.selectCalendar : undefined};
  font-family: Gilroy, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  color: ${({ $isSelected, theme }) =>
    $isSelected
      ? theme.palette.dropdown.calendar.whiteTextCalendar
      : theme.palette.dropdown.calendar.textCalendar};
  justify-content: center;
  align-items: center;
`

export const CalendarElementHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background: ${({ theme }) => theme.palette.dropdown.calendar.backgroundCalendarCalendar};
  min-height: 48px;
`
