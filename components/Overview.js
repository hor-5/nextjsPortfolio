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
const Tecnologias = dynamic(() => import('./Tecnologias'), { suspense: true })


export default function OverviewSection() {

    return (
        <>
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='EICOM' src='/assets/eicom_logo.jpg' />
                <Heading size='xs'> EICOM Institute </Heading>
                <Heading size='xs'> Agosto 2023 - Actualidad </Heading>
            </HStack>
            <Text ml='12' fontWeight='bolder'>Ecommerce Solution Architect</Text>
            <Text ml='12' mb='2' fontSize='13px' >
                Logré la certificación de Commerce Architecture Certification (CAC) level 1.
                Aprendi como diseñar una arquitectura de ecommerce y acompañar clientes en el proyecto de implementación de la misma de principio a fin.
                Actualmente nos encontramos aportando a un proyecto como parte de la experiencia profesional del curso.
            </Text>
            <Divider orientation='horizontal' />
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='EICOM' src='/assets/eicom_logo.jpg' />
                <Heading size='xs'> EICOM Institute </Heading>
                <Heading size='xs'> Febrero 2023 - Junio 2023 </Heading>
            </HStack>
            <Text ml='12' fontWeight='bolder'>Digital Commerce Specialist</Text>
            <Text ml='12' mb='2' fontSize='13px' >
                Aprendi y apliqué en ejercicios los conceptos de ecommerce.
                Logré las certificaciones de Commerce Management Executive (CMX) Level 1 y Level 2.
            </Text>

            <Divider orientation='horizontal' />
            
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='ISTIC' src='https://static.wixstatic.com/media/e1a484_d5641d3797ff4c17b854ab87181af298~mv2.png/v1/fit/w_2500,h_1330,al_c/e1a484_d5641d3797ff4c17b854ab87181af298~mv2.png' />
                <Heading size='xs'> Instituto Superior Tecnologico Inmaculada Concepción </Heading>
                <Heading size='xs'> Marzo 2021 - Julio 2023 </Heading>
            </HStack>
            <Text ml='12' fontWeight='bolder'>Analista de sistemas</Text>
            <Text ml='12' mb='2' fontSize='13px' >
                Realicé proyectos utilizando Python, Java, C# , Kotlin, PHP, HTML, CSS, Postgresql y MySQL.
                Agregué una mirada analítica y más profesional con presentaciones
                de diagramas UML, DER.
                Profundicé en la programación orientada a objetos
                conceptualmente y en la practica.(polimorfismo, encapsulamiento,
                composición, interfaces, herencia)
            </Text>

            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='PC' src='https://depcsuite.com/wp-content/themes/depcsuite/images/logo.jpg' />
                <Heading size='xs'> DePc Suite </Heading>
                <Heading size='xs'> Feb 2020 - Junio 2020 </Heading>
            </HStack>
            <Text ml='12' fontWeight='bolder'>Desarrollador web</Text>
            <Text ml='12' mb='2' fontSize='13px' >
                Di mis primeros pasos con el maquetado web utilizando HTML, CSS, Javascript y Bootstrap.
                Aprendí los fundamentos de programación y programé mi primera aplicación web utilizando PHP
                como lenguaje de backend y MySQL como lenguaje de base de datos. Aprendí los fundamentos del framework php Laravel. Aprendí buenas prácticas y convenciones para el desarrollo web.
            </Text>
            <Divider orientation='horizontal' />


            <Heading mt='2' mb='3' size='md' >¿Qué tecnologias manejo?</Heading>

            <Suspense fallback={<Flex justifyContent='center'>
                <CircularProgress isIndeterminate color='#4edba7' />
            </Flex>}>
                <Tecnologias />
            </Suspense>


            <Divider orientation='horizontal' />
            <Heading mt='2' mb='2' size='md'>Metas</Heading>
            <Text fontSize='14px' mb='7'>
                Busco seguir creciendo y formándome como profesional de la tecnología y el ecommerce. Mi meta es aprender cada día y convertirme en un referente en mi equipo, aportando el conocimiento adquirido.
            </Text>

        </>
    )
}