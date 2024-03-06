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
    Spacer, SkeletonCircle, CircularProgress,
    Divider
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React,{useRef,useEffect, Suspense } from 'react'
import Experiencia from '../../../components/Experiencia'
import OverviewSection from '../../../components/Overview'
import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher'
import { RiLinkedinFill, RiGithubLine, RiDownloadFill, RiTerminalBoxLine } from "react-icons/ri"

//Lotie animation
function ComputerLottie() {

    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });

    return (
        <>
            <lottie-player
                id="computer"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/assets/computer.json"
                height={200}
                width={200} 
            ></lottie-player>

        </>
    )
}

//main component
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
                    <Heading size="2xl" color={useColorModeValue("blue.700", 'whiteAlpha.900')}> </Heading>
                    <ScaleFade initialScale={0.9} in={true} >
                        <Flex alignItems='center' p='7' mt='2' direction="row"
                            bg={useColorModeValue('gray.50', 'gray.300')}
                            boxShadow='xl' rounded='xl' m='2'>
                            <VStack alignItems='center'>
                                <WrapItem>
                                    <Suspense fallback={<SkeletonCircle size='30' />}>
                                        <Avatar objectFit="contain" size='xl' boxShadow='md' name='Horacio Capdevila' src='/assets/avatar.png' />
                                    </Suspense>

                                </WrapItem>
                            </VStack>
                            <VStack >
                                <Text p='3' alignItems='center' fontSize='md'
                                    color='blue.700'>
                                    Soy <Highlight query={['Horacio', 'Capdevila']} styles={{ fontWeight: 'bold', color: 'teal' }}>Horacio Capdevila</Highlight>, analisis de sistemas y desarrollador web.
                                    <br/> Actualmente, estoy participando en el <a target='_blank'rel="noreferrer" href='https://careers.vtex.com/early-careers/digital-commerce-specialist-program/'><b style={{color:'#F71963'}}>Digital Commerce Specialist Program de VTEX</b></a> ,<br />
                                     donde me estoy formando como experto en ecommerce, al mismo tiempo, <br/>desempeño el rol de <b>Field Software Engineer</b> para la region APUB<br/> 
                                      brindando apoyo a clientes y partners de la plataforma de VTEX.
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
                            <Flex height="250" width="250" justifyContent="center" className='computerLottie'>
                                <Suspense fallback={<CircularProgress isIndeterminate color='teal.400' />} >
                                    <ComputerLottie />
                                </Suspense>
                            </Flex>



                        </Flex>
                    </ScaleFade>

                </VStack>

                <Flex justifyContent='center' mt='30'>

                    <a href='https://www.github.com/hor-5' target="_blank" rel="noreferrer">
                        <Button colorScheme='black' variant='outline' rounded='full' m='1' p='0'> <RiGithubLine fontSize="25" /> </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/horacio-capdevila-b8aa666b/' target="_blank" rel="noreferrer">
                        <Button color={useColorModeValue("white", "blue.800")} colorScheme='linkedin' rounded='full' m='1' p='0'> <RiLinkedinFill fontSize="22" /> </Button>
                    </a>

                </Flex>

                <VStack justifySelf='center'>

                    <a href='/assets/resume_HoracioCapdevila.pdf' download>
                        <Button m='2' colorScheme='blue' rounded='full'> Descargar CV  <RiDownloadFill /></Button>
                    </a>

                </VStack>

                <Divider />
                <Flex justifyContent='end' m='4'>
                    <Link href='/Portfolio/proyectos'>
                        <Button colorScheme="teal" rounded="xl"> Ver proyectos <RiTerminalBoxLine /> </Button>
                    </Link>                   
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
                            <OverviewSection />
                            :
                            <Experiencia />
                        }

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )

}