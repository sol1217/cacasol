import { MobileScreen, DesktopScreen, TabletScreen } from './Screen.elements'
import { ScreenProps } from './Screen.types'

export const Screen = ({ device, children }: ScreenProps) => {
  switch (device) {
    case 'mobile':
      return <MobileScreen>{children}</MobileScreen>
    case 'tablet':
      return <TabletScreen>{children}</TabletScreen>
    case 'desktop':
      return <DesktopScreen>{children}</DesktopScreen>
    default:
      return null
  }
}
