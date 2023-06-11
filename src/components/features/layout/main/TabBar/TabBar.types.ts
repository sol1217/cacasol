export interface TabBarProps {
  back?: boolean
}

export type TabBarTabIndex = 0 | 1 | 2 | 3

export type TabBarTabStyle = {
  text: string
  defaultIcon: string
  focusedIcon: string
  leftPosition: number
}

export type TabBarTabStylesType = Record<TabBarTabIndex, TabBarTabStyle>
