import { OneProvider } from '@one/core'
import '@one/core/dist/one.css'

export default function App({ Component, pageProps }) {
  return (
    <OneProvider>
      <Component {...pageProps} />
    </OneProvider>
  )
}
