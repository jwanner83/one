import { OneProvider } from '@one/core'

export default function App({ Component, pageProps }) {
  return (
    <OneProvider>
      <Component {...pageProps} />
    </OneProvider>
  )
}
