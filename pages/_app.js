import '@/styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EduTry</title>
        <link rel="icon" href="./edutry.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
