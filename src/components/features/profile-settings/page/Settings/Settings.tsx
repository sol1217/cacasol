import { Accordeon } from '@core'

import { ACCORDEON_DATA } from './Settings.constants'
import { SettingsWrap } from './Settings.elements'

export const Settings = () => {
  return (
    <SettingsWrap>
      <Accordeon data={ACCORDEON_DATA} />
    </SettingsWrap>
  )
}
