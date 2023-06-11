import styled from 'styled-components'

export const HeroWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 104px 0 71px 0;

  & > span {
    text-align: center;
  }

  & > span:first-of-type {
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.11);
  }
`

export const IconWrap = styled.div`
  width: 116px;
  height: 116px;
  background-color: #eef5f9;
  border-radius: 50%;
  position: absolute;
  bottom: -58px;
  left: calc(50% - 58px);
  display: flex;
  justify-content: center;
  align-items: center;
`
