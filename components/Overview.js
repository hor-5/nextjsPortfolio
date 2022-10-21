import {
    Text,
    HStack,
    Avatar,
    Heading,
    Divider,
    CircularProgress,
    Flex
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Tecnologias = dynamic( ()=>import('./Tecnologias'), {suspense:true} )


export default function OverviewSection() {

    return (
        <>
            <Text>
                Comencé mi acercamiento con la programación realizando un curso de desarrollo web fullstack.
            </Text>
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='PC' src='https://depcsuite.com/wp-content/themes/depcsuite/images/logo.jpg' />
                <Heading size='xs'> DePc Suite </Heading>
                <Heading size='xs'> Feb 2020 - Junio 2020 </Heading>
            </HStack>
            <Text ml='12' mb='2' fontSize='13px' >
                Di mis primeros pasos con el maquetado web utilizando HTML, CSS, Javascript y Bootstrap.
                Aprendí los fundamentos de programación y programé mi primera aplicación web utilizando PHP
                como lenguaje de backend y MySQL como lenguaje de base de datos. Aprendí los fundamentos del framework php Laravel. Aprendí buenas prácticas y convenciones para el desarrollo web.
            </Text>
            <Divider orientation='hotizontal' />
            <Text>
                Actualmente me encuentro cursando el segundo año de la tecnicatura en analisis de sistemas.
            </Text>
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='ISTIC' src='https://static.wixstatic.com/media/e1a484_d5641d3797ff4c17b854ab87181af298~mv2.png/v1/fit/w_2500,h_1330,al_c/e1a484_d5641d3797ff4c17b854ab87181af298~mv2.png' />
                <Heading size='xs'> Instituto Superior Tecnologico Inmaculada Concepción </Heading>
                <Heading size='xs'> Mayo 2021 - Actualidad </Heading>
            </HStack>
            <Text ml='12' mb='2' fontSize='13px' >
                Realicé proyectos utilizando Python, Java, C# , Kotlin, PHP, HTML, CSS, Postgresql y MySQL.
                Agregué una mirada analítica y más profesional con presentaciones
                de diagramas UML, DER.
                Profundicé en la programación orientada a objetos
                conceptualmente y en la practica.(polimorfismo, encapsulamiento,
                composición, interfaces, herencia)
            </Text>
            <Divider orientation='horizontal' />
            <Heading mt='2' mb='3' size='md' >¿Qué tecnologias manejo?</Heading>
                <Suspense fallback={<Flex justifyContent='center'>
                                        <CircularProgress isIndeterminate color='#4edba7' />
                                    </Flex>}>
                    <Tecnologias/>
                </Suspense>
            <Heading mt='2' size='xs'>Lenguajes de programación</Heading>
            
            <Divider orientation='horizontal' />
            <Heading mt='2' mb='2' size='md'>¿Qué busco actualmente?</Heading>
            <Text fontSize='14px' mb='7'>
                Ganar experiencia, aplicar mis conocimientos y seguir aprendiendo en una empresa moderna, con una cultura innovadora y colaborativa que permita y fomente mi crecimiento y desarrollo personal y profesional. En cuanto a tecnologias y lenguajes
                me gustaria seguir profundizando en el uso de javascript; utilizando React o NextJs como frontend, y
                C# .NET como backend.
            </Text>

        </>
    )
}