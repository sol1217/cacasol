import styled from 'styled-components'

export const CollectionCardWrap = styled.div`
  width: 100%;
  max-width: 180px;
  position: relative;
  height: 295px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`
export const BottomBlock = styled.div`
  background-color: ${({ theme }) => theme.palette.collectionCard.background};
  border-radius: 10px;
  height: 208px;
  padding-top: 108px;
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 154px;
  display: flex;
  justify-content: center;
`

export const ImageWrap = styled.div`
  z-index: 2;
`

export const DecorElementWrap = styled.div`
  position: absolute;
  top: 134px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.palette.collectionCard.outerBackground};
`

export const CenterContent = styled.div`
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.palette.collectionCard.secondaryText};
  display: flex;
  column-gap: 2px;
  justify-content: center;
  align-items: center;
`

export const NameWrap = styled.div`
  text-align: center;
  padding: 0 15px;
  min-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`

export const PriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`

export const PricesWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    position: relative;
    top: 3px;
  }

  & > span:last-of-type {
    top: -3px;
  }
`

export const ActionButtonWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.collectionCard.outerBackground};
  position: absolute;
  bottom: 0px;
  left: calc(50% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`
