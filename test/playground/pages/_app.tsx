import OneProvider from "@one/core/provider/OneProvider";

export default function App({ Component, pageProps }) {
  return 
    <OneProvider>
        <Component {...pageProps} />
    </OneProvider>
}
