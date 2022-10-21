import { Flex, Heading, Button,
        CircularProgress,SlideFade,
        useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'
import {Suspense, lazy} from 'react'
import dynamic from 'next/dynamic'
const Lottie = dynamic(()=>import('react-lottie'))
import * as animationData from '../public/lottie-files/heraut404.json'
//import Lottie from 'react-lottie';


//Lotie animation
function HerautLottie() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
         
          <Suspense fallback={<CircularProgress mt='20' isIndeterminate color='blue.500' />}>         
              <Lottie options={defaultOptions}
                  height={350}
                  width={300}/>         
          </Suspense>
        
        </>
    )
}

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
            
              <HerautLottie/>
            
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
