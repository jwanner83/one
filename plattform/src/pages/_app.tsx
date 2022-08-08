import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>one - the all in one solution</title>
        <link rel="icon" type="image/x-icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
