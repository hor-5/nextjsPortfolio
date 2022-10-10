import { Text,
        HStack,
        Avatar,
        Heading,
        Divider } from '@chakra-ui/react'

export default function SkillsSection() {

    return (
        <>
            <Text>
                Actualmente me encuentro cursando el segundo año de analisis de sistemas.
            </Text>
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='McDonalds' src='https://static.wixstatic.com/media/e1a484_d5641d3797ff4c17b854ab87181af298~mv2.png/v1/fit/w_2500,h_1330,al_c/e1a484_d5641d3797ff4c17b854ab87181af298~mv2.png' />
                <Heading size='xs'> Instituto Superior Tecnologico Inmaculada Concepción </Heading>
                <Heading size='xxs'> Mayo 2021 - Actualidad </Heading>
            </HStack>
            <Text ml='12' fontSize='12px'>
                Realicé proyectos en Python, Java, PHP, HTML, CSS Y MySQL.
                Agregué una mirada analítica y más profesional con presentaciones
                de diagramas UML, DER.
                Profundicé en la programación orientada a objetos
                conceptualmente y en la practica.(polimorfismo, encapsulamiento,
                composición, interfaces).
            </Text>
            <Divider orientation='horizontal' />
        </>
    )
}