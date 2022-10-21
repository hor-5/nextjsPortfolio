import {
    Grid,
    GridItem,
    Image,
    Divider,
    Heading
} from '@chakra-ui/react'

export default function Tecnologias() {
    return (
        <>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem w='100%' h='20' bg='gray.200' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Javascript' height='100%' width='100%' rounded='3xl'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='gray.200' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='PHP' height='100%' width='100%' rounded='3xl'
                        src='https://tshirtgeek.co/wp-content/uploads/2021/06/com029.jpg' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Python' height='100%' width='100%' rounded='3xl'
                        src='https://statinfer.com/wp-content/uploads/2016/11/python-logo.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang'>
                    <Image alt='C#' height='100%' width='100%' rounded='3xl'
                        src='https://cdn.cdnlogo.com/logos/c/27/c.svg' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Java' height='100%' width='100%' rounded='3xl'
                        src='https://www.svgrepo.com/show/303388/java-4-logo.svg' />
                </GridItem>
                <GridItem w='100%' h='20' bg='blue.500' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='TypeScript' height='100%' width='100%' rounded='3xl'
                        src='https://www.svgrepo.com/show/303600/typescript-logo.svg' />
                </GridItem>
            </Grid>
            <Divider orientation='horizontal' />

            <Heading mt='2' size='xs'>Herramientas visuales</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='HTML' height='100%' width='100%' rounded='3xl'
                        src='https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png' />
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='CSS' height='100%' width='100%'
                        src='https://cdn-icons-png.flaticon.com/512/888/888897.png?w=360' />
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Sass' height='100%' width='100%'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Photoshop' height='100%' width='100%'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2101px-Adobe_Photoshop_Express_logo.svg.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Figma' height='100%' width='100%' rounded='3xl'
                        src='https://ih1.redbubble.net/image.4177874291.7889/st,small,507x507-pad,600x600,f8f8f8.jpg' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Sketchup' height='100%' width='100%' rounded='3xl'
                        src='https://1000logos.net/wp-content/uploads/2021/04/SketchUp-logo.png' />
                </GridItem>

            </Grid>

            <Divider orientation='horizontal' />
            <Heading mt='2' size='xs'>Base de datos</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem pt='2' pb='2' pr='1' pl='1' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Mysql' height='100%' width='100%'
                        src='https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png' />
                </GridItem>
                <GridItem p='1' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Postgresql' height='100%' width='100%' rounded='xl'
                        src='https://lcaballero.files.wordpress.com/2015/02/postgresql-logo.jpg?w=640' />
                </GridItem>
                <GridItem pt='2' pb='2' pr='1' pl='1' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Sqlite3' height='100%' width='100%'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png' />
                </GridItem>
            </Grid>
            <Divider orientation='horizontal' />

            <Heading mt='2' size='xs'>Herramientas de control de versiones</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Git' height='100%' width='100%'
                        src='https://blogs.incyclesoftware.com/hs-fs/hubfs/Git%20Logo.jpg?width=716&name=Git%20Logo.jpg' />
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Github' height='100%' width='100%'
                        src='https://newsignature.com/wp-content/uploads/2020/08/github-logo-crop.png' />
                </GridItem>
            </Grid>
            <Divider orientation='horizontal' />

            <Heading mt='2' size='xs'>Librerias y frameworks</Heading>
            <Grid mt='2' mb='2' templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem p='2' w='100%' h='20' bg='gray.200' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Next js' height='100%' width='100%' rounded='3xl'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png' />
                </GridItem>
                <GridItem p='2' w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='React js' height='100%' width='100%'
                        src='https://techinfini.in/wp-content/uploads/2017/09/React-Logo-1.png' />
                </GridItem>
                <GridItem pb='2' pt='2' w='100%' h='20' bg='#29bfb3' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Chakra UI' height='100%' width='100%' rounded='3xl'
                        src='https://i.ibb.co/2M1GH4T/chakra.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Bootstrap' height='100%' width='100%' rounded='3xl'
                        src='https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Angular js' height='100%' width='100%' rounded='3xl'
                        src='https://www.marioperez.com.mx/wp-content/uploads/2014/03/angularJS.png' />
                </GridItem>
                <GridItem pt='2' pb='2' w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Express js' height='100%' width='100%' rounded='3xl'
                        src='https://www.donny.pro/img/habilidades/express.svg' />
                </GridItem>
                <GridItem w='100%' h='20' bg='gray.800' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='Laravel' height='100%' width='100%' rounded='3xl'
                        src='https://cms-assets.tutsplus.com/uploads/users/769/posts/25334/preview_image/get-started-with-laravel-6-400x277.png' />
                </GridItem>
                <GridItem w='100%' h='20' bg='white' rounded='3xl' className='progLang' boxShadow='md'>
                    <Image alt='.NET 6' height='100%' width='100%' rounded='3xl'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png' />
                </GridItem>

            </Grid>
        </>
    )

}