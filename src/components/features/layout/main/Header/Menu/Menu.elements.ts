import styled from 'styled-components'

export const MenuWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #eef5f9;
  padding: 120px 32px 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Logo = styled.div`
  height: 64px;
  border-radius: 16px;
  background-color: #b0cdff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 32px;
`

export const LoggedUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const UserAvatar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background: linear-gradient(95.93deg, #b1e5ff 0%, #94cdff 98.03%);
  margin-right: 16px;
`

export const UserDataWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-right: 5px;
`

export const UserOnlineStatus = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #3ac080;
  position: absolute;
  bottom: 1px;
  right: 2px;
`

export const GearWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 9px;

  & > button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export const LogoutButton = styled.button`
  height: 44px;
  width: 44px;
  min-height: 44px;
  min-width: 44px;
  background-color: #e3edf2;
  border-radius: 12px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Divider = styled.div`
  background-color: #e3edf2;
  height: 1px;
  margin: 0 -32px;
`

export const LoginButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 26px;
`

export const MidLinksWrap = styled.div`
  margin-top: 20px;
  display: flex;
`

export const MidLinksSection = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CollectionLinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const FooterTopSection = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 10px;
`

export const FooterLinksWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`
