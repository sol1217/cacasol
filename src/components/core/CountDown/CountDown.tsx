import { memo, useEffect, useState } from 'react'

import { Typography } from '@core'

import { CountDownWrap } from './CountDown.elements'
import { CountDownProps } from './CountDown.types'

export const CountDown = memo(({ seconds, variant, onEnd = () => {} }: CountDownProps) => {
  const [finalDate, setFinalDate] = useState(0)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setFinalDate(Date.now() + seconds * 1000)
  }, [seconds])

  useEffect(() => {
    const interval = setInterval(() => {
      const minutes = Math.floor(Math.floor((finalDate - Date.now()) / 1000) / 60)
      const seconds = Math.floor((finalDate - Date.now()) / 1000) % 60

      if (minutes < 1 && seconds < 1) {
        clearInterval(interval)
        setValue('00:00')
        onEnd()
      } else {
        setValue(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [finalDate, onEnd])

  return (
    <CountDownWrap>
      <Typography variant={variant}>{value}</Typography>
    </CountDownWrap>
  )
})
