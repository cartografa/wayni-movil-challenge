import TabBar from '../components/TabBar/TabBar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <TabBar />
    </>
  )
}

export default MyApp
