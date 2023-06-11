import styled from 'styled-components'

export const ChestCollectionsWrap = styled.div`
  padding: 0 12px;
`

export const SearchInputWrap = styled.div`
  margin-bottom: 24px;
`

export const CollectionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`

export const EmptySearchResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;
`

export const SearchResultWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px 2px;
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
