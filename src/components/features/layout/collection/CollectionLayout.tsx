import { Header } from '../main/Header'
import { TabBar } from '../main/TabBar'
import { LayoutProps } from '../types'

export const CollectionLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header variant="home" />
      <main>{children}</main>
      <TabBar />
    </div>
  )
}
