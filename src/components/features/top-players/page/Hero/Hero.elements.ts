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
  width: 80px;
  height: 80px;
  background-color: #eef5f9;
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: calc(50% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconWrapInner = styled.div`
  width: 72px;
  height: 72px;
  border: 4px solid #fff;
  background-color: #e3edf2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
