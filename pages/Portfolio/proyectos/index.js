import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import {
    Heading,
    Grid,
    GridItem,
    Spacer,
    Flex,
    useColorModeValue,
    Text
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../../components/ColorModeSwitcher"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Carousel from '../../../components/Carousel'

export default function Proyectos() {

    return (
        <>
            <Head>
                <title>Proyectos</title>

                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />

                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
                    rel="stylesheet"
                />
            </Head>
            <Script type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"></Script>

            <GridItem bg={useColorModeValue('blue.50', 'blue.800')} height='100vh' >
                <Flex>
                    <Link href='/Portfolio/introduccion' >

                        <ChevronLeftIcon boxSize='10' className='btn-volver' />

                    </Link>
                    <Spacer />
                    <ColorModeSwitcher />
                </Flex>
                <Heading>
                    Algunos de los proyectos que realicé...
                </Heading>
                <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem mt='3' p='14'justifyContent='center' w='90%' h='100%' 
                              rounded='xl' bg={useColorModeValue('gray.100','gray.900')} boxShadow='md'>
                        <Carousel />
                        <Heading size='md'>Titulito</Heading>
                        <Text>
                            Prueba descripcion de proyecto
                        </Text>
                    </GridItem >

                </Grid>
                
            </GridItem>
        </>
    )
}