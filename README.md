# one

headless cms for next.js based on supabase.

this tool works as a "plugin" like cms wich you wrap arround your next.js page and get functionalities like editing 
content and adding pages ...

to use it, just add this to your `_app.tsx`

```tsx
import { OneProvider } from '@one/core'
import '@one/core/dist/one.css'

export default function App({ Component, pageProps }) {
  return (
    <OneProvider>
      <Component {...pageProps} />
    </OneProvider>
  )
}

```
