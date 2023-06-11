import { ReactNode, ReactElement } from 'react'
import { NextPage } from 'next'

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}
