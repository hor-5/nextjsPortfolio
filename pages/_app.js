import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
