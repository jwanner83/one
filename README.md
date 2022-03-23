# one

headless cms for next.js based on supabase for developers.

### disclaimer

`one` is in early development and currently **not** functional. all the `@one` packages are not available on any npm 
registry and are only available through `pnpm workspace` in the `test/playground` next test workspace.

as soon as there is a release candidate, a pre-release will be created and the packages will be published. soon after 
that, a small but sweet documentation will follow.

### description

this tool works as a "plugin" like cms wich you wrap around your next.js page and get functionalities like editing 
content and adding pages and posts and many more. 

it is **not** a wordpress like solution which doesn't really require any technical knowledge. it is required to know 
react and next.js. 

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
