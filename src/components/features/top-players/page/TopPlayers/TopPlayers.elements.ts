import styled from 'styled-components'

export const TopPlayersWrap = styled.div`
  margin-top: 8px;
  background: #fff;
  border-radius: 25px;
  padding: 70px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`

export const PlayersWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export const ShowAllButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% + 64px);
`

export const ShowAllButton = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% + 24px);
  max-width: 400px;
  height: 40px;
  position: relative;
  overflow: hidden;
  margin: 20px -12px 0 -12px;
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    position: absolute;
    top: -41px;
    left: calc(50% - 228.5px);
  }
`

export const EmptySearchResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
