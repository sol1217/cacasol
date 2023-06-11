import { ReactElement } from 'react'

export interface AccordeonProps {
  data: AccordeonElement[]
}

export type AccordeonElement = {
  head: ReactElement | string
  body: ReactElement | string
  search?: string
}
