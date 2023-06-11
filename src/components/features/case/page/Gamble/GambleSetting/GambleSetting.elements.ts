import styled from 'styled-components'

export const GambleSettingWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  height: 260px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`

export const ToggleHolder = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  padding: 10px 8.5px 18px;
  width: 56px;
  height: 66px;
  border-radius: 16px;
  background-color: ${({ $color }) => $color};
  outline: 1px solid rgba(255, 255, 255, 0.2);
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 18px;
  color: white;
  gap: 4px;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  grid-gap: 8px;
`
