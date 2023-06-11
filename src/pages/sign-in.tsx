import Head from 'next/head'

import { SignInPage, SignInLayout } from '@features'

import { NextPageWithLayout } from './_app'

const SignIn: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInPage />
    </>
  )
}

export default SignIn

SignIn.getLayout = (page) => {
  return <SignInLayout>{page}</SignInLayout>
}
