import Head from 'next/head'

import { ProfilePage, ProfileLayout } from '@features'

import { NextPageWithLayout } from './../_app'

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfilePage />
    </>
  )
}

export default Profile

Profile.getLayout = (page) => {
  return <ProfileLayout>{page}</ProfileLayout>
}
