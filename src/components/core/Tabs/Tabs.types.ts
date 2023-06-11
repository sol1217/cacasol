export interface TabsProps {
  tabs: string[]
  activeTabIndex: number
  onChange: (index: number) => void
  variant?: 'v1' | 'v2'
}
