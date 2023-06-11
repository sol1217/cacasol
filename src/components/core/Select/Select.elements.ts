import styled, { FlattenSimpleInterpolation } from 'styled-components'

export const SelectHead = styled.div`
  height: 54px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.palette.dropdown.basic.stroke};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 20px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

export const HeadValue = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  user-select: none;
  font-family: Gilroy sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.dropdown.basic.text};
`

export const HeadIconWrap = styled.div<{ $active: boolean }>`
  width: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transform: ${({ $active }) => ($active ? 'rotateZ(180deg)' : undefined)};
`

export const Dropdown = styled.div<{ $sx: FlattenSimpleInterpolation }>`
  display: none;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.palette.dropdown.basic.stroke};
  padding: 15px 20px;
  flex-direction: column;
  position: absolute;
  z-index: 100000;
  max-height: 294px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.dropdown.basic.background};

  ${({ $sx }) => $sx}
`

export const DropdownOption = styled.div`
  margin-bottom: 10px;
  user-select: none;
  font-family: Gilroy sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.dropdown.basic.text};
  word-break: keep-all;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
  }
`
