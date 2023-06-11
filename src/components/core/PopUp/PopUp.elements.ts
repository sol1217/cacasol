import styled from 'styled-components'

export const PopUpWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  width: 100%;
  height: 100vh;
  background: rgba(16, 37, 56, 0.4);
  backdrop-filter: blur(8px);
`

export const Holder = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 16px;
  width: 100%;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 94px 30px 30px 30px;
  width: 100%;
  background: white;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
`
