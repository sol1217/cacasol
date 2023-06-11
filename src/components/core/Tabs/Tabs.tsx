import { Tab, TabsWrap } from './Tabs.elements'
import { TabsProps } from './Tabs.types'

export const Tabs = ({ tabs, activeTabIndex, onChange, variant = 'v1' }: TabsProps) => {
  return (
    <TabsWrap $variant={variant}>
      {tabs.map((tab, index) => (
        <Tab
          onClick={() => onChange(index)}
          $isActive={activeTabIndex === index}
          $variant={variant}
          key={tab}>
          {tab}
        </Tab>
      ))}
    </TabsWrap>
  )
}
