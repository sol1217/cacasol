import { useState } from 'react'

import { Switch } from '@core'
import { gradients } from '@styles/gradients'
import coldCase from '@assets/images/case-cold.png'

import { GambleSettingBarTab } from './GambleSettingBar/GambleSettingBar.types'
import { Grid, ToggleHolder, GambleSettingWrap } from './GambleSetting.elements'
import { GambleSettingProps } from './GambleSetting.types'
import { GambleSettingBar } from './GambleSettingBar'
import { GambleSettingCasePreviewCard } from './GambleSettingCasePreviewCard'

export const GambleSetting = ({}: GambleSettingProps) => {
  const [nOfCases, setNOfCases] = useState<GambleSettingBarTab>(1)
  const [isFast, setIsFast] = useState(false)

  return (
    <GambleSettingWrap>
      <GambleSettingBar
        color="#84B7F1"
        activeTab={nOfCases}
        onChange={(tab) => {
          setNOfCases(tab)
        }}
      />
      <Grid>
        {[...Array(nOfCases).keys()].map((index) => (
          <GambleSettingCasePreviewCard
            key={index}
            size={nOfCases === 1 ? 'medium' : 'small'}
            image={coldCase}
            backgroundColor={gradients.cold}
            standColor={gradients.cold}
            boxShadow="0 0 100px rgba(42, 81, 170, 0.7)"
          />
        ))}
      </Grid>
      <ToggleHolder $color="#84B7F1">
        Быстро
        <Switch value={isFast} onToggle={() => setIsFast(!isFast)} />
      </ToggleHolder>
    </GambleSettingWrap>
  )
}
