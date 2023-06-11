import styled from 'styled-components'

export const SettingsWrap = styled.div`
  margin-top: 8px;
  border-radius: 25px;
  background-color: #fff;
  padding: 20px 0;

  & .accordeon-element-wrap {
    border-radius: 0;
    border-width: 1px;
    margin-bottom: 0;
    border-bottom-width: 0;
    padding: 16px 32px;

    &.open {
      border-bottom-width: 0;

      &:last-of-type {
        border-bottom-width: 0;
      }
    }

    &:last-of-type {
      border-bottom-width: 1px;
    }
  }
`
