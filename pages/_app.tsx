import { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App