import Head from 'next/head'

import { TopPlayersPage, TopPlayersLayout } from '@features'

import { NextPageWithLayout } from './_app'

const TopPlayers: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopPlayersPage />
    </>
  )
}

export default TopPlayers

TopPlayers.getLayout = (page) => {
  return <TopPlayersLayout>{page}</TopPlayersLayout>
}
