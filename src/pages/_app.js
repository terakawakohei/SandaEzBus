
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ChakraProvider>

  )
}

export default MyApp
