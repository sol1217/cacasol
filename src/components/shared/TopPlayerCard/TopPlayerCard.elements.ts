import styled from 'styled-components'

export const TopPlayerCardWrap = styled.div`
  position: relative;
  width: 117px;
`

export const PhotoWrap = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 4px;
  left: calc(50% - 24px);
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.topPlayerCard.border};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.topPlayerCard.background};
`

export const StarIconWrap = styled.div`
  position: absolute;
  top: 28px;
  left: calc(50% - 25px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserNameWrap = styled.div`
  position: absolute;
  top: 81px;
  text-align: center;
  left: 0;
  right: 0;
  padding: 0 8px;

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`

export const UserOpenLinkWrap = styled.div`
  position: absolute;
  top: 94px;
  text-align: center;
  left: 0;
  right: 0;

  span {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.topPlayerCard.secondaryColor};
  }
`

export const RaitingWrap = styled.div`
  position: absolute;
  top: 125px;
  text-align: center;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.palette.topPlayerCard.primaryColor};
`
