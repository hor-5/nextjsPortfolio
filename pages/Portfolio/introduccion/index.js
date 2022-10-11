import Link from 'next/link'
import Head from 'next/head'
import {
    Heading, Flex, WrapItem,
    Avatar, VStack, Text, ScaleFade, Button,
    Skeleton, Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Highlight,
    useColorModeValue, GridItem, useBoolean,
    Spacer} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Suspense } from 'react'
import Experiencia from '../../../components/Experiencia'
import OverviewSection from '../../../components/Overview'
import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher'



export default function Intro() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [overview, isOverview] = useBoolean()


    return (

        <>

            <Head>
                <title>Intro</title>
            </Head>
        
            <GridItem bg={useColorModeValue('blue.50', 'blue.800')} height='100vh' >
                <Flex>
                    <Link href='/Portfolio' >

                        <ChevronLeftIcon boxSize='10' className='btn-volver' />

                    </Link>
                    <Spacer />
                    <ColorModeSwitcher />
                </Flex>


                <VStack size='md'>
                    <Heading size="2xl" color={useColorModeValue("blue.700", 'whiteAlpha.900')}> Sobre mi...</Heading>
                    <ScaleFade initialScale={0.9} in={true} >
                        <Flex  alignItems='center' p='7' mt='2' direction="row"
                            bg={useColorModeValue('gray.100', 'gray.300')}
                            boxShadow='xl' rounded='xl'>
                            <VStack alignItems='center'>
                                <WrapItem>
                                    <Avatar size='xl' boxShadow='md' name='Horacio Capdevila' src='https://i.ibb.co/NSS77bD/1638904799041.jpg' />

                                </WrapItem>
                            </VStack>
                            <VStack >
                                <Text p='3' alignItems='center' fontSize='md'
                                    color='blue.700'>
                                    Soy <Highlight query={['Horacio', 'Capdevila']} styles={{ fontWeight: 'bold', color: 'teal' }}>Horacio Capdevila</Highlight>, estudiante avanzado de analisis de sistemas y desarrollador web
                                    <br />Soy una persona detallista, que siempre busca aprender y mejorar mis habilidades.<br />
                                    Actualmente estoy buscando un cambio laboral que me permita crecer personal y profesionalmente.
                                </Text>

                                <Flex direction='row'>
                                    <Button className='btn'
                                        mr='2'
                                        ml='2'
                                        rounded='full'
                                        color='whiteAlpha.900'
                                        onClick={() => {
                                            isOverview.on()
                                            onOpen()
                                        }}>
                                        Overview
                                    </Button>

                                    <Button className='btn'
                                        mr='2'
                                        ml='2'
                                        rounded='full'
                                        color='whiteAlpha.900'

                                        onClick={() => {
                                            isOverview.off()
                                            onOpen()
                                        }}>

                                        Experiencia
                                    </Button>


                                </Flex>

                            </VStack>
                            <Flex height="250" width="250" justifyContent="center">
                                <Suspense fallback={<Skeleton height="200px" width="200px" />} >
                                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
                                </Suspense>
                            </Flex>



                        </Flex>
                    </ScaleFade>

                </VStack>

            <Flex >

            </Flex>
            

            </GridItem>



            <Drawer onClose={onClose} isOpen={isOpen} size='lg' >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader bg={useColorModeValue('gray.100', 'blue.900')}
                        color={useColorModeValue("blue.700", 'whiteAlpha.900')}>
                        {overview ? 'Paneo general' : 'Experiencia'}
                    </DrawerHeader>
                    <DrawerBody bg={useColorModeValue('gray.100', 'blue.900')}
                        color={useColorModeValue("blue.700", 'whiteAlpha.900')}>
                        {overview ?
                            <OverviewSection /> :
                            <Experiencia />
                        }

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )

}