import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Heading, Skeleton, 
        Box, Button, VStack, Text, 
        SlideFade,useColorModeValue} from '@chakra-ui/react'
import { Suspense } from 'react'

export default function Portfolio() {

    return (
        <>
            <Head>
                <title>Inicio</title>
            </Head>
            
            <SlideFade in={true} offsetY='50px'>
                <Flex direction="row" height="100vh" justifyContent="center" alignItems="center" bg={useColorModeValue("blue.50",'blue.800')}>

                    <VStack>
                        <Heading textAlign='center'
                                    size="2xl" 
                                    color={useColorModeValue("blue.700",'whiteAlpha.900')}>
                            Bienvenido a mi portfolio
                        </Heading>
                        <Text p='2'
                              textAlign='center'
                              fontSize='md' 
                              color={useColorModeValue("blue.700",'whiteAlpha.900')}> 
                            Donde vas a poder conocer un poco sobre mi.
                        </Text>
                        <Link href='/Portfolio/introduccion'>
                            <Button className='btn' rounded="full" color="whiteAlpha.900">¡Empezemos!</Button>
                        </Link>

                    </VStack>
                    <Flex height="350" width="300" justifyContent="center">
                        <Suspense fallback={<Skeleton height="200px" width="200px" />} >
                            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_dlw10cqe.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
                        </Suspense>
                    </Flex>

                </Flex>
            </SlideFade>


        </>
    )

}