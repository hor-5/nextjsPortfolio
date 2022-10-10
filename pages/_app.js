import { ChakraProvider,Grid,useColorModeValue } from '@chakra-ui/react'
import Script from 'next/script'
import Router from 'next/router'
import { useState } from 'react'
import Loader from '../components/Loader'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))

  return (
    <>
      {loading && <Loader />}
      <ChakraProvider>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
        <Grid bg={useColorModeValue('blue.50', 'blue.800')}>          
          <ColorModeSwitcher justifySelf="flex-end" />          
          <Component {...pageProps} />          
        </Grid>
      </ChakraProvider>
      
    </>
  )
}

export default MyApp
