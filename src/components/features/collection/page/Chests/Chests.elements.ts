import styled from 'styled-components'

export const ChestsWrap = styled.div`
  padding: 0 12px;
`

export const SearchInputWrap = styled.div`
  margin-bottom: 24px;
`

export const CollectionCardsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 8px;
`

export const EmptySearchResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;
`

export const LoaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-bottom: 50px;

  & > img {
    animation: 0.4s infinite linear rotate;

    @keyframes rotate {
      from {
        transform: rotateZ(0deg);
      }

      to {
        transform: rotateZ(360deg);
      }
    }
  }
`
