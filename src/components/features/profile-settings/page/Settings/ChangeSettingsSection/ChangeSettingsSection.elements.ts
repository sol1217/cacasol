import styled from 'styled-components'

import { mixins } from '@styles/mixins'

export const ChangeSettingsSectionWrap = styled.div``

export const SettingsElementWrap = styled.div`
  border-top: 1px solid #e9f3f9;
  border-bottom: 1px solid #e9f3f9;

  width: calc(100% + 64px);
  padding: 0 32px;
`

export const SettingsElementInner = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
`

export const IconWrap = styled.div`
  width: 32px;
  height: 32px;
  background-color: #e3edf2;
  border-radius: 10px;

  ${mixins.flex.center}
`
