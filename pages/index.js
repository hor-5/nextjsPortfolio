import { Flex, Heading, Button,
        CircularProgress,SlideFade,
        useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'
import {Suspense} from 'react'


export default function Home() {
  return (
    <>
        <Head>
          <title>Heraut</title>
        </Head>


        <Flex boxShadow="md" bg={useColorModeValue('orange.200','orange.400')} height="100vh" alignItems="center" justifyContent="center">
        <SlideFade in={true} offsetY='50px'>
          <Flex direction="column" bg={useColorModeValue('gray.100','gray.500')} p={10} rounded={10}>
            <Heading size="md">Lo sentimos, esta pagina web ya no está disponible </Heading>

            <Flex with="300" height="350" justifyContent="center">
            <Suspense fallback={<CircularProgress isIndeterminate color='blue.500' />}>
              <lottie-player src="https://lottie.host/054bd1fc-7cbf-44d2-b797-e697fa9c9fe4/OFZXmKh7r3.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
            </Suspense>
            </Flex>
            <Flex justifyContent="center">
              <Link href='/Portfolio'>
                <Button _hover={{
                  background: "orange.400",
                  color: "gray.100",
                }} width={300} mt={5} color="orange" rounded={20} p={5} >Ir a portfolio </Button>
              </Link>
            </Flex>

          </Flex>

      </SlideFade>
        </Flex>
    </>
  )
}
