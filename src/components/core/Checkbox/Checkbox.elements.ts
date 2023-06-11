import styled from 'styled-components'

export const CheckboxInner = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  transition: all 0.2s;
`

export const CheckboxWrap = styled.div<{ isActive: boolean }>`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  border-radius: 6px;
  border: 1.5px solid
    ${({ isActive, theme }) =>
      isActive ? theme.palette.button.checkbox.strokeOn : theme.palette.button.checkbox.strokeOff};
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.button.checkbox.backgroundOff};

  &:hover {
    cursor: pointer;
  }

  & > ${CheckboxInner} {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.palette.button.checkbox.on : 'transparent'};
  }
`
