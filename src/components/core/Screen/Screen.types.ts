type DeviceType = 'mobile' | 'tablet' | 'desktop'

export interface ScreenProps {
  device: DeviceType
  children: React.ReactNode
}
