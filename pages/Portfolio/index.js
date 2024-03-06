import React, { useEffect, useRef,Suspense, lazy } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
    Flex, Heading, Skeleton,
    Box, Button, VStack, Text,
    SlideFade, useColorModeValue, GridItem
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../components/ColorModeSwitcher'
import Carousel from '../../components/Carousel'
import { CiLocationArrow1 } from "react-icons/ci";

//Lotie animation
function HomeLottie() {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (
        <>
            <lottie-player
                id="HomeLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/assets/home.json"
                height={400}
                width={400}
            ></lottie-player>

        </>
    )
}

//main component
export default function Portfolio() {

    return (
        <>
            <Head>
                <title>Inicio</title>
            </Head>
            <SlideFade in={true} offsetY='50px'>
                <GridItem direction="row" height="100vh" justifyContent="center" alignItems="center" bg={useColorModeValue("blue.50", 'blue.800')}>
                    <Flex justifyContent='end'>
                        <ColorModeSwitcher />
                    </Flex>
                    <Flex height="350" width="300" justifyContent="center">
                        <Suspense fallback={<Skeleton height="200px" width="200px" />} >
                            <HomeLottie/>
                        </Suspense>
                    </Flex>
                    <VStack>
                        <Heading textAlign='center'
                            size="2xl"
                            color={useColorModeValue("blue.700", 'whiteAlpha.900')}>
                            Bienvenido/a!
                        </Heading>
                        <Text p='2'
                            textAlign='center'
                            fontSize='md'
                            color={useColorModeValue("blue.700", 'whiteAlpha.900')}>
                            Presioná continuar para conocer mejor mi perfil profesional.
                        </Text>
                        <Link href='/Portfolio/introduccion'>
                            <Button className='btn' rounded="full" color="whiteAlpha.900">Continuar <CiLocationArrow1 /></Button>
                        </Link>

                    </VStack>



                </GridItem>
            </SlideFade>


        </>
    )

}