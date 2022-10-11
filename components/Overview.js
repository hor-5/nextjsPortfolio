import {
    Text,
    HStack,
    Avatar,
    Heading,
    Divider,
    Grid,
    GridItem,
    Image   
} from '@chakra-ui/react'

export default function OverviewSection() {

    return (
        <>
            <Text>
                Comencé a acercarme a la programación realizando un curso de desarrollo fullstack.
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
            <Divider orientation='hotizontal'/>
            <Text>
                Actualmente me encuentro cursando el segundo año de analisis de sistemas.
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
            
            <Heading mt='2' size='xs'>Lenguajes de programación</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem w='100%' h='20' bg='gray.200' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='gray.200' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://tshirtgeek.co/wp-content/uploads/2021/06/com029.jpg'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://statinfer.com/wp-content/uploads/2016/11/python-logo.png'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://cdn.cdnlogo.com/logos/c/27/c.svg'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://www.svgrepo.com/show/303388/java-4-logo.svg'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='blue.400' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://www.svgrepo.com/show/303600/typescript-logo.svg'/>                    
                </GridItem>                
            </Grid>
            <Divider orientation='horizontal' />

            <Heading mt='2' size='xs'>Herramientas visuales</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png'/>                    
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%'  
                           src='https://cdn-icons-png.flaticon.com/512/888/888897.png?w=360'/>                    
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' 
                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image  height='100%' width='100%'  
                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2101px-Adobe_Photoshop_Express_logo.svg.png'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://ih1.redbubble.net/image.4177874291.7889/st,small,507x507-pad,600x600,f8f8f8.jpg'/>                    
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://1000logos.net/wp-content/uploads/2021/04/SketchUp-logo.png'/>                    
                </GridItem>
                
            </Grid>

            <Divider orientation='horizontal' />
            <Heading mt='2' size='xs'>Base de datos</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem w='100%' h='20' bg='white' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' 
                           src='https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png'/>                    
                </GridItem>
                <GridItem p='1' w='100%' h='20' bg='white' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%'  rounded='xl'
                           src='https://lcaballero.files.wordpress.com/2015/02/postgresql-logo.jpg?w=640'/>                    
                </GridItem>
                <GridItem p='1' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' 
                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png'/>                    
                </GridItem>               
            </Grid>
            <Divider orientation='horizontal' />

            <Heading mt='2' size='xs'>Herramientas de control de versiones</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%' 
                           src='https://blogs.incyclesoftware.com/hs-fs/hubfs/Git%20Logo.jpg?width=716&name=Git%20Logo.jpg'/>                    
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl'  className='progLang' boxShadow='md'>
                    <Image height='100%' width='100%'  
                           src='https://newsignature.com/wp-content/uploads/2020/08/github-logo-crop.png'/>                    
                </GridItem>                
            </Grid>
            <Divider orientation='horizontal' />

            <Heading mt='2' size='xs'>Librerias y frameworks</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem w='100%' h='20' bg='gray.200' rounded='3xl' className='progLang'  boxShadow='md'>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_6MLb71lccG.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
                </GridItem>
                <GridItem w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang'  boxShadow='md'>
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_b23ll34c.json" background="transparent" speed="0.2" loop autoplay></lottie-player>
                </GridItem>                
                <GridItem w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang'  boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://i.ibb.co/2M1GH4T/chakra.png'/>                     
                </GridItem>             
                <GridItem w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang'  boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png'/>                     
                </GridItem>                             
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang'  boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://www.marioperez.com.mx/wp-content/uploads/2014/03/angularJS.png'/>                     
                </GridItem>                           
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang'  boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://www.donny.pro/img/habilidades/express.svg'/>                     
                </GridItem>                           
                <GridItem w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang'  boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://cms-assets.tutsplus.com/uploads/users/769/posts/25334/preview_image/get-started-with-laravel-6-400x277.png'/>                     
                </GridItem>                           
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang'  boxShadow='md'>
                    <Image height='100%' width='100%' rounded='3xl' 
                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png'/>                     
                </GridItem>                           
                
            </Grid>
            <Divider orientation='horizontal' />
            <Heading mt='2' mb='2' size='md'>¿Qué busco actualmente?</Heading>
            <Text fontSize='14px' mb='7'>
                Ganar experiencia, aplicar mis conocimientos y seguir aprendiendo en una empresa moderna, con una cultura innovadora y colaborativa que me permita y fomente mi crecimiento y desarrollo personal y profesional. En cuanto a tecnologias y lenguajes
                 me gustaria seguir profundizando en el uso de javascript; utilizando React o NextJs como frontend, y 
                 C# .NET como backend.
            </Text>

        </>
    )
}