import Link from 'next/link'
import Head from 'next/head'
import {
    Heading,
    GridItem,
    Spacer,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../../components/ColorModeSwitcher"
import { ChevronLeftIcon } from '@chakra-ui/icons'
//import CardProyecto from '../../../components/CardProyecto'

import SectionProyectos from '../../../components/SectionProyectos'

export default function Proyectos() {

    
    return (
        <>
            <Head>
                <title>Proyectos</title>

            </Head>

            <GridItem bg={useColorModeValue('blue.50', 'blue.800')} height='100vh' >
                <Flex>
                    <Link href='/Portfolio/introduccion' >

                        <ChevronLeftIcon boxSize='10' className='btn-volver' />

                    </Link>
                    <Spacer />
                    <ColorModeSwitcher />
                </Flex>
                <Flex justifyContent='center' mb='2'>
                    <Heading size="2xl" color={useColorModeValue("blue.700", 'whiteAlpha.900')}> Algunos proyectos que realicé...</Heading>
                </Flex>



                <SectionProyectos  />

            </GridItem>


        </>
    )
}