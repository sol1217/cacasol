import { ReactNode, useEffect, ReactElement } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { store } from '@store'
import { defaultTheme } from '@styles/defaultTheme'
import { GlobalStyle } from '@styles/globalStyles'
import '@styles/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Modal } from '@components/core/Modal'

import { Page } from '../types/page'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  )
}
