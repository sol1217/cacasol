import { LayoutProps } from './../types'
import { Footer } from './Footer'
import { Header } from './Header'
import { TabBar } from './TabBar'

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
      <TabBar />
    </div>
  )
}
