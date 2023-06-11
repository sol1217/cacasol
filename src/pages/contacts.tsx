import Head from 'next/head'

import { ContactsPage, ContactsLayout } from '@features'

import { NextPageWithLayout } from './_app'

const Contacts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactsPage />
    </>
  )
}

export default Contacts

Contacts.getLayout = (page) => {
  return <ContactsLayout>{page}</ContactsLayout>
}
