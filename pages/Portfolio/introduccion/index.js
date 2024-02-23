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
import { Suspense } from 'react'
import Experiencia from '../../../components/Experiencia'
import OverviewSection from '../../../components/Overview'
import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('react-lottie'))
import * as animationData from '../../../public/lottie-files/computer.json'
import { RiLinkedinFill, RiGithubLine,RiDownloadFill,RiTerminalBoxLine } from "react-icons/ri"

//Lotie animation
function ComputerLottie() {

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
            <Lottie options={defaultOptions}
                height={200}
                width={200} />
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
                    <Heading size="2xl" color={useColorModeValue("blue.700", 'whiteAlpha.900')}> Sobre mi...</Heading>
                    <ScaleFade initialScale={0.9} in={true} >
                        <Flex alignItems='center' p='7' mt='2' direction="row"
                            bg={useColorModeValue('gray.50', 'gray.300')}
                            boxShadow='xl' rounded='xl' m='2'>
                            <VStack alignItems='center'>
                                <WrapItem>
                                    <Suspense fallback={<SkeletonCircle size='30' />}>
                                        <Avatar size='xl' boxShadow='md' name='Horacio Capdevila' src='/assets/avatar.png' />
                                    </Suspense>

                                </WrapItem>
                            </VStack>
                            <VStack >
                                <Text p='3' alignItems='center' fontSize='md'
                                    color='blue.700'>
                                    Soy <Highlight query={['Horacio', 'Capdevila']} styles={{ fontWeight: 'bold', color: 'teal' }}>Horacio Capdevila</Highlight>, analisis de sistemas y desarrollador web.
                                    <br /> Me considero una persona detallista, siempre en búsqueda de oportunidades para aprender <br />
                                    
                                    y perfeccionar mis habilidades. Actualmente, estoy participando en el programa DCS de VTEX, donde me estoy especializando <br />
                                    como experto en ecommerce. Al mismo tiempo,desempeño el rol de <b>Field Software Engineer</b> para la region APUB.
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
                    <Button m='2' colorScheme='blue' rounded='full'> Descargar CV  <RiDownloadFill/></Button>
                   </a>
                    
                </VStack>

                    <Divider/>
                {/*<Flex justifyContent='end' m='4'>
                    <Link href='/Portfolio/proyectos'>
                        <Button colorScheme="teal" rounded="xl"> Ver proyectos <RiTerminalBoxLine /> </Button>
                    </Link>                   
                  </Flex>*/}                        

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