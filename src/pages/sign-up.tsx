import Head from 'next/head'

import { SignUpPage, SignUpLayout } from '@features'

import { NextPageWithLayout } from './_app'

const SignUp: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Starcase</title>
        <meta name="description" content="Starcase project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUpPage />
    </>
  )
}

export default SignUp

SignUp.getLayout = (page) => {
  return <SignUpLayout>{page}</SignUpLayout>
}
