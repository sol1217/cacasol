import Link from 'next/link'
import styled from 'styled-components'

import { mixins } from '@styles/mixins'

export const ContactLinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  background-color: #fff;
  padding: 64px 32px 32px 32px;
  border-radius: 25px;
  margin-bottom: 16px;
`

export const ContactLink = styled(Link)`
  display: flex;
  gap: 14px;
  background-color: #eef5f9;
  border-radius: 16px;
  padding: 10px;
  align-items: center;
`

export const IconWrap = styled.div`
  height: 44px;
  width: 44px;
  background-color: #fff;
  border-radius: 50%;
  border: 1.5px solid #d4dee3;

  ${mixins.flex.center}
`
