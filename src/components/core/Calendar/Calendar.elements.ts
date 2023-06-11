import styled from 'styled-components'

export const CalendarSelectedDateHolder = styled.div`
  display: flex;
  height: 54px;
  gap: 10px;
  background-color: white;
  cursor: pointer;
  padding: 15px 20px 15px 13px;
  border: 1.5px solid ${({ theme }) => theme.palette.dropdown.calendar.stroke};
  border-radius: 16px;
`

export const CalendarElementHolder = styled.div`
  display: flex;
  width: 329px;
  position: absolute;
`
