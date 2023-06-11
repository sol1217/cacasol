import Head from 'next/head'
import { useRouter } from 'next/router'

import { CollectionPage } from '@features'
import { CollectionLayout } from '@features/layout/collection'

import { NextPageWithLayout } from '../_app'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <>
      <Head>
        <title>Collection</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CollectionPage />
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>
}
