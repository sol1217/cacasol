import { ReactElement } from 'react'

import { HeaderVariant } from '@features/layout/main/Header/Header.types'

export type LayoutProps = {
  children: ReactElement
  headerVariant?: HeaderVariant
}

// Следющие лэйоуты можно экстендить от этого
