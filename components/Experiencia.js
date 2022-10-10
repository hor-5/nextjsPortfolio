import {
    HStack,
    Avatar,
    Heading,
    Text,
    Divider
} from '@chakra-ui/react'
export default function Experiencia() {

    return (
        <>
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='Developer' src='https://i.pinimg.com/originals/bc/ce/f3/bccef3acf376bba141d56eb0d8fcfc09.jpg' />
                <Heading size='md'> Freelance Developer </Heading>
                <Heading size='xs'> Sep 2020 - May 2022 </Heading>
            </HStack>
            <Text ml='12'>
                Desarrollos web con PHP, Mysql, HTML, CSS y bootstrap.
                Aplicaciones de escritorio .NET, C#,PostgreSql y WindowsForm.
                Proyectos academicos.
                Conocimiento de API Rest. <br />Librerias frontend React js, Angular. <br /> Servicios web Heroku.
            </Text>
            <Divider orientation='horizontal' />
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='Aegis' src='https://mms.businesswire.com/media/20190429005710/en/718776/22/Startek-Aegis-Combined-Logo-01.jpg' />
                <Heading size='md'> Aegis S.A </Heading>
                <Heading size='xs'> Nov 2018 - Sep 2022 </Heading>
            </HStack>
            <Text ml='12'>
                Venta de los servicios de movistar hogar.<br />
                Cumplimiento de estándares de calidad y objetivos establecidos por
                Movistar.
            </Text>
            <Divider orientation='horizontal' />
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='Baco' src='https://ii.ct-stc.com/5/logos/empresas/2022/08/12/20af86d9471c486b8fc6150126838thumbnail.jpg' />
                <Heading size='md'> Baco Club </Heading>
                <Heading size='xs'> Sep 2017 - Oct 2018 </Heading>
            </HStack>
            <Text ml='12'>
                Encargado de sumar nuevos socios para el club de vinos.<br/>
                Encargado de recopilar un registro de teléfonos relevantes para poder
                realizar ventas en frio.<br/>
                Aplicación de tecnicas de ventas y cumplimiento de estandares de calidad y
                objetivos.
            </Text>
            <Divider orientation='horizontal' />
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='Luxurywatches' src='https://www.alti.rs/pub/media/wysiwyg/slider/rolexwatchesads01.jpg' />
                <Heading size='md'> Venta online de relojes </Heading>
                <Heading size='xs'> Jun 2011 - May 2017 </Heading>
            </HStack>
            <Text ml='12'>
                Venta online de relojes importados.<br/>
                Manejo de publicaciones en canales de venta.<br/>
                Coordinación para la entrega con proveedores y clientes.
            </Text>
            <Divider orientation='horizontal' />
            <HStack my='2'>
                <Avatar size='md' boxShadow='md' name='McDonalds' src='https://i.pinimg.com/736x/89/1a/f2/891af2adbdcdf549c672c58add333977.jpg' />
                <Heading size='md'> Arcos Dorados S.A. </Heading>
                <Heading size='xs'> Feb 2011 - Jun 2011 </Heading>
            </HStack>
            <Text ml='12'>
                Miembro crew.
            </Text>
            <Divider orientation='horizontal' />
        </>
    )

}