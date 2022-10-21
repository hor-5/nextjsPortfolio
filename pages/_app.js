import { ChakraProvider,Grid,useColorModeValue } from '@chakra-ui/react'
import Router from 'next/router'
import { useState } from 'react'
import Loader from '../components/Loader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))



  return (
    <>
      {loading && <Loader />}
      <ChakraProvider>        
        <Grid bg={useColorModeValue('blue.50', 'blue.800')} height='100vh' width='100vw'>                 
          <Component {...pageProps} />          
        </Grid>
      </ChakraProvider>
      
    </>
  )
}

export default MyApp
