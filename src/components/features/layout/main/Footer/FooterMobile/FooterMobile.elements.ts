import styled from 'styled-components'

export const OuterContainer = styled.div`
  padding: 9px 12px 150px 12px;
`

export const InnerContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.footer.innerBackground};
  border-radius: 30px;
  padding: 18px 19px 14px 19px;
`

export const Statistics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  border-radius: 20px;
  margin-bottom: 24px;
  overflow: hidden;
`

export const StatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.footer.statisticsBackground};
  padding: 8px;
`

export const MailLinks = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const HorizontalLinks = styled.div`
  display: flex;
  margin-bottom: 16px;
  column-gap: 10px;
  justify-content: center;
`

export const Address = styled.div`
  margin-bottom: 8px;
  text-align: center;
`

export const Copyright = styled.div`
  text-align: center;
`
