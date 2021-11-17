import Head from 'next/head'
import PhoneSize from '../components/PhoneSize'

import TabBar from '../components/TabBar/TabBar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/wayni.ico" />
        <title>Wayni Móvil Caso Práctico</title>
      </Head>
      <PhoneSize>
        <Component {...pageProps} />
        <TabBar />
      </PhoneSize>
    </>
  )
}

export default MyApp
