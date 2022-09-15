import { Flex, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Heraut</title>       
      </Head>

      

      <Flex boxShadow="md" background="orange.200" height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={10} rounded={10}>
          <Heading size="md">Lo sentimos, esta pagina web ya no está disponible </Heading>

          <Flex with="300" height="350" justifyContent="center">
            <lottie-player  src="https://lottie.host/054bd1fc-7cbf-44d2-b797-e697fa9c9fe4/OFZXmKh7r3.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
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
      
      </Flex>

    </>
  )
}
