import { OneProvider } from '@one/core'
import '@one/core/dist/one.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <OneProvider>
      <Component {...pageProps} />
    </OneProvider>
  )
}
