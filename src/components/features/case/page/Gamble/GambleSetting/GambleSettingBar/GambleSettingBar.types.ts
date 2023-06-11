export type GambleSettingBarProps = {
  color: string
  activeTab: GambleSettingBarTab
  onChange: (tab: GambleSettingBarTab) => void
}

export type GambleSettingBarTab = 1 | 2 | 3 | 4
