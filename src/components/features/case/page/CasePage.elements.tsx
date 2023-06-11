import styled from 'styled-components'

export const CasePageWrap = styled.div`
  padding-bottom: 160px;
`

export const ChestsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px 4px;
  padding-bottom: 20px;
`

export const ShowAllButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
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
    top: -38px;
    left: calc(50% - 228.5px);
  }
`
