import styled from 'styled-components'

export const AccordeonWrap = styled.div`
  width: 100%;
`

export const AccordeonElementWrap = styled.div`
  padding: 17px 20px;
  margin-bottom: 7px;
  border: 2px solid #e9f3f9;
  border-radius: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  font-family: Gilroy sans-serif;
  color: #2f2f2f;
`

export const ToggleButton = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: #e9f3f9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 17px;
`

export const Body = styled.div`
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  font-family: Gilroy sans-serif;
  color: #2f2f2f;
`
