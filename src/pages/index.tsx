import Head from 'next/head'

import { HomePage, HomeLayout } from '@components/features'

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>
}
