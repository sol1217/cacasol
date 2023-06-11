import Image from 'next/image'
import styled from 'styled-components'

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const UserInfoAvatarWrap = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: #a8cced;
  padding: 10px;
  position: relative;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: #3ac080;
    border: 3px solid white;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

export const UserInfoAvatarWrapInner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 100%;
  }
`

export const UserInfoAvatar = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
