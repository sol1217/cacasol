export interface Icon {
  width?: number
  height?: number
  viewBox?: string
  color?: string
  inheritedColor?: boolean
  ml?: number
  mr?: number
  shadow?: boolean
}

export interface PressableIcon extends Icon {
  isPressed: boolean
}
