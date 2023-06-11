import React from 'react'

export type SendMessageButtonProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
  width?: number
  height?: number
  color?: string
}
