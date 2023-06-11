import Link from 'next/link'
import styled from 'styled-components'

export const FooterDesktopWrap = styled.div`
  width: 100%;
  height: 160px;
  background: ${({ theme }) => theme.palette.footer.innerBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px;
`

export const FooterDesktopInfoblock = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FooterDesktopDelimeter = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.palette.footer.statisticsBackground};
`

export const FooterDesktopStatistics = styled.div`
  display: flex;
  gap: 12px;
`

export const FooterDesktopStatisticsItem = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 30px 16px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.palette.footer.statisticsBackground};

  span:first-child {
    font-size: 10px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.footer.secondaryText};
  }
`

export const FooterDesktopLinks = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  column-gap: 20px;
`

export const FooterDesktopLink = styled(Link)`
  color: ${({ theme }) => theme.palette.footer.secondaryText};
  width: 100%;
  padding: 10px 0;
  padding-bottom: 11px;
  position: relative;

  ${FooterDesktopDelimeter} {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.footer.linkHover};

    ${FooterDesktopDelimeter} {
      background: ${({ theme }) => theme.palette.footer.linkHover};
    }
  }
`

export const FooterDesktopSocials = styled.div`
  display: flex;
  gap: 8px;
  align-self: self-start;
`

export const FooterDesktopSocialItem = styled(Link)`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.footer.socialMediaBackground};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.palette.footer.socialMediaHoverBackground};

    svg path {
      fill: white;
    }
  }
`
