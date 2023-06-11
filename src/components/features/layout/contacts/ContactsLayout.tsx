import { Header } from '../main/Header'
import { TabBar } from '../main/TabBar'
import { LayoutProps } from '../types'

export const ContactsLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <TabBar />
    </div>
  )
}
