import { Typography } from '@core'

import {
  SettingsButtonToggleWrap,
  SettingsButtonToggleTooltip,
} from './SettingsButtonToggle.elements'
import { SettingsButtonToggleProps } from './SettingsButtonToggle.types'

export const SettingsButtonToggle = ({ children, tooltipText }: SettingsButtonToggleProps) => {
  return (
    <SettingsButtonToggleWrap>
      {children}

      {tooltipText && (
        <SettingsButtonToggleTooltip>
          <Typography variant="desktopBodySRegular1212">{tooltipText}</Typography>
        </SettingsButtonToggleTooltip>
      )}
    </SettingsButtonToggleWrap>
  )
}
