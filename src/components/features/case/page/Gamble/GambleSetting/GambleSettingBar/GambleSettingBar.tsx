import { useState } from 'react'

import { Box } from '@core'

import {
  Dot,
  Tab,
  Line,
  InfoCard,
  InfoButton,
  CutOutElement,
  GambleSettingBarWrap,
} from './GambleSettingBar.elements'
import { GambleSettingBarTab, GambleSettingBarProps } from './GambleSettingBar.types'

export const GambleSettingBar = ({ color, activeTab, onChange }: GambleSettingBarProps) => {
  const [isInfoCardVisible, setIsInfoCardVisible] = useState(false)

  const tabs: GambleSettingBarTab[] = [1, 2, 3, 4]

  return (
    <GambleSettingBarWrap $color={color}>
      {isInfoCardVisible && (
        <>
          <InfoCard>
            Здесь ты можешь выбрать, <br />
            сколько сундуков хочешь
            <br />
            открыть за один раз
          </InfoCard>
          <Dot />
        </>
      )}
      <InfoButton onClick={() => setIsInfoCardVisible(!isInfoCardVisible)}>i</InfoButton>
      <Line />
      <Box sx={{ flexDirection: 'column', gap: '4px' }}>
        {tabs.map((value) => (
          <Tab
            key={`gamble-setting-bar-tab-${value}x`}
            $isActive={value === activeTab}
            onClick={() => onChange(value)}>
            {value}x{value === activeTab && <CutOutElement />}
          </Tab>
        ))}
      </Box>
    </GambleSettingBarWrap>
  )
}
