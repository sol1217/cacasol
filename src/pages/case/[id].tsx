import Head from 'next/head'
import { useRouter } from 'next/router'

import { CasePage, CaseLayout } from '@components/features'

import { NextPageWithLayout } from '../_app'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <>
      <Head>
        <title>Case</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CasePage />
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <CaseLayout>{page}</CaseLayout>
}
