import Head from 'next/head'

import { FaqPage, FaqLayout } from '@features'

import { NextPageWithLayout } from './_app'

const Faq: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FaqPage />
    </>
  )
}

export default Faq

Faq.getLayout = (page) => {
  return <FaqLayout>{page}</FaqLayout>
}
