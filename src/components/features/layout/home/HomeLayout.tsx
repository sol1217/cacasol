import { Footer } from '../main/Footer'
import { Header } from '../main/Header'
import { TabBar } from '../main/TabBar'
import { LayoutProps } from '../types'

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header variant="home" />
      <main>{children}</main>
      <TabBar />
      <Footer />
    </div>
  )
}
