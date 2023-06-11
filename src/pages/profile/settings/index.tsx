import Head from 'next/head'

import { ProfileSettingsPage, ProfileSettingsLayout } from '@features'

import { NextPageWithLayout } from './../../_app'

const Settings: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileSettingsPage />
    </>
  )
}

export default Settings

Settings.getLayout = (page) => {
  return <ProfileSettingsLayout>{page}</ProfileSettingsLayout>
}
