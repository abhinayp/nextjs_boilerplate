import Head from 'next/head';
import type { AppProps } from 'next/app'
import 'styles/font.scss'
import 'styles/buttons.scss'
import 'styles/animations.scss'
import 'styles/globals.scss'
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>My App</title>
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
