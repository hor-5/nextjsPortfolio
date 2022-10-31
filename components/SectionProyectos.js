import { HStack, SimpleGrid, GridItem,Button } from '@chakra-ui/react'
import CardProyecto from './CardProyecto';
import { proyectos } from '../public/assets/proyectos'
import { useState } from 'react';

export default function SectionProyectos() {
    const [tecnologia, setTecnologia] = useState('todo');
    var Contenido = () => { }
    var Menu = () => {  }
    const proyectosReact = proyectos.filter(proyecto => proyecto.tech === "react")
    const proyectosPhp = proyectos.filter(proyecto => proyecto.tech === "php")
    const proyectosCsharp = proyectos.filter(proyecto => proyecto.tech === "C#")
    const proyectosJava = proyectos.filter(proyecto => proyecto.tech === "java")
    const proyectosPython = proyectos.filter(proyecto => proyecto.tech === "python")

    switch (tecnologia) {
        case "todo":
            var Menu = () => {
                return(
                    <>
                    
                    <HStack mx='4' mt='2'>
                        <Button id='todo'
                            rounded='xl'
                            colorScheme='teal'
                            variant='solid'
                            onClickCapture={() => {
                                setTecnologia('todo')
                            }}>
                            Todo
                        </Button>
                        <Button id='react'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('react')
                            }}>
                            React
                        </Button>
        
                        <Button id='php'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('php')
                            }}>
                            PHP
                        </Button>
        
                        <Button id='C#'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('C#')
                            }}>
                            C#
                        </Button>
                        <Button id='java'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('java')
                            }}>
                            Java
                        </Button>
                        <Button id='python'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('python')
                            }}>
                            Python
                        </Button>
        
                    </HStack>
                    </>
                )
            }
            Contenido = () => {
                return (
                    <>
                        <SimpleGrid columns={[2, null, 4]} spacing='40px' mx='2'>
                            {
                                proyectos.map(proyecto =>

                                    <GridItem w='100%'  key={proyecto.id}>
                                        <CardProyecto 
                                            key={proyecto.id}
                                            image={proyecto.images[0]}
                                            helperText={proyecto.tech}
                                            title={proyecto.title}
                                            description={proyecto.shortDescription}
                                            linkGithub={proyecto.linkGitHub != ''? proyecto.linkGitHub :false}
                                            linkTestOnline={proyecto.linkTestOnline === ''? false : proyecto.linkTestOnline} />
                                    </GridItem >
                                )
                            }

                        </SimpleGrid>
                    </>
                );
            }
            break;
        case "react":
            var Menu = () => {
                return(
                    <>
                    
                    <HStack mx='4' mt='2'>
                        <Button id='todo'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('todo')
                            }}>
                            Todo
                        </Button>
                        <Button id='react'
                            rounded='xl'
                            colorScheme='teal'
                            variant='solid'
                            onClickCapture={() => {
                                setTecnologia('react')
                            }}>
                            React
                        </Button>
        
                        <Button id='php'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('php')
                            }}>
                            PHP
                        </Button>
        
                        <Button id='C#'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('C#')
                            }}>
                            C#
                        </Button>
                        <Button id='java'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('java')
                            }}>
                            Java
                        </Button>
                        <Button id='python'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('python')
                            }}>
                            Python
                        </Button>
        
                    </HStack>
                    </>
                )
            }
            Contenido = () => {
                return (
                    <>
                        <SimpleGrid columns={[2, null, 4]} spacing='40px' mx='2'>
                            {
                                proyectosReact.map(proyecto =>

                                    <GridItem w='100%'  key={proyecto.id}>
                                        <CardProyecto 
                                            key={proyecto.id}
                                            image={proyecto.images[0]}
                                            helperText={proyecto.tech}
                                            title={proyecto.title}
                                            description={proyecto.shortDescription}
                                            linkGithub={proyecto.linkGitHub != ''?  proyecto.linkGitHub :false} 
                                            linkTestOnline={proyecto.linkTestOnline === ''? false : proyecto.linkTestOnline}/>
                                    </GridItem >
                                )
                            }

                        </SimpleGrid>
                    </>
                );
            }
            break;
        case "php":
            var Menu = () => {
                return(
                    <>
                    
                    <HStack mx='4' mt='2'>
                        <Button id='todo'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('todo')
                            }}>
                            Todo
                        </Button>
                        <Button id='react'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('react')
                            }}>
                            React
                        </Button>
        
                        <Button id='php'
                            rounded='xl'
                            colorScheme='teal'
                            variant='solid'
                            onClickCapture={() => {
                                setTecnologia('php')
                            }}>
                            PHP
                        </Button>
        
                        <Button id='C#'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('C#')
                            }}>
                            C#
                        </Button>
                        <Button id='java'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('java')
                            }}>
                            Java
                        </Button>
                        <Button id='python'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('python')
                            }}>
                            Python
                        </Button>
        
                    </HStack>
                    </>
                )
            }
            Contenido = () => {
                return (
                    <>
                        <SimpleGrid columns={[2, null, 4]} spacing='40px' mx='2'>
                            {
                                proyectosPhp.map(proyecto =>

                                    <GridItem w='100%' key={proyecto.id} >
                                        <CardProyecto 
                                            key={proyecto.id}
                                            image={proyecto.images[0]}
                                            helperText={proyecto.tech}
                                            title={proyecto.title}
                                            description={proyecto.shortDescription}
                                            linkGithub={proyecto.linkGitHub != ''? proyecto.linkGitHub :false} 
                                            linkTestOnline={proyecto.linkTestOnline === ''? false : proyecto.linkTestOnline}/>
                                    </GridItem >
                                )
                            }

                        </SimpleGrid>
                    </>
                );
            }
            break;
        case "C#":
            var Menu = () => {
                return(
                    <>
                    
                    <HStack mx='4' mt='2'>
                        <Button id='todo'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('todo')
                            }}>
                            Todo
                        </Button>
                        <Button id='react'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('react')
                            }}>
                            React
                        </Button>
        
                        <Button id='php'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('php')
                            }}>
                            PHP
                        </Button>
        
                        <Button id='C#'
                            rounded='xl'
                            colorScheme='teal'
                            variant='solid'
                            onClickCapture={() => {
                                setTecnologia('C#')
                            }}>
                            C#
                        </Button>
                        <Button id='java'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('java')
                            }}>
                            Java
                        </Button>
                        <Button id='python'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('python')
                            }}>
                            Python
                        </Button>
        
                    </HStack>
                    </>
                )
            }
            Contenido = () => {
                return (
                    <>
                        <SimpleGrid columns={[2, null, 4]} spacing='40px' mx='2'>
                            {
                                proyectosCsharp.map(proyecto =>

                                    <GridItem w='100%' key={proyecto.id} >
                                        <CardProyecto 
                                            key={proyecto.id}
                                            image={proyecto.images[0]}
                                            helperText={proyecto.tech}
                                            title={proyecto.title}
                                            description={proyecto.shortDescription}
                                            linkGithub={proyecto.linkGitHub != ''? proyecto.linkGitHub :false} 
                                            linkTestOnline={proyecto.linkTestOnline === ''? false : proyecto.linkTestOnline}/>
                                    </GridItem >
                                )
                            }

                        </SimpleGrid>
                    </>
                );
            }
            break;
        case "java":
            var Menu = () => {
                return(
                    <>
                    
                    <HStack mx='4' mt='2'>
                        <Button id='todo'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('todo')
                            }}>
                            Todo
                        </Button>
                        <Button id='react'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('react')
                            }}>
                            React
                        </Button>
        
                        <Button id='php'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('php')
                            }}>
                            PHP
                        </Button>
        
                        <Button id='C#'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('C#')
                            }}>
                            C#
                        </Button>
                        <Button id='java'
                            rounded='xl'
                            colorScheme='teal'
                            variant='solid'
                            onClickCapture={() => {
                                setTecnologia('java')
                            }}>
                            Java
                        </Button>
                        <Button id='python'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('python')
                            }}>
                            Python
                        </Button>
        
                    </HStack>
                    </>
                )
            }
            Contenido = () => {
                return (
                    <>
                        <SimpleGrid columns={[2, null, 4]} spacing='40px' mx='2'>
                            {
                                proyectosJava.map(proyecto =>

                                    <GridItem w='100%' key={proyecto.id} >
                                        <CardProyecto 
                                            key={proyecto.id}
                                            image={proyecto.images[0]}
                                            helperText={proyecto.tech}
                                            title={proyecto.title}
                                            description={proyecto.shortDescription}
                                            linkGithub={proyecto.linkGitHub === ''? false : proyecto.linkGitHub} 
                                            linkTestOnline={proyecto.linkTestOnline === ''? false : proyecto.linkTestOnline}/>
                                    </GridItem >
                                )
                            }

                        </SimpleGrid>
                    </>
                );
            }
            break;
        case "python":
            var Menu = () => {
                return(
                    <>
                    
                    <HStack mx='4' mt='2'>
                        <Button id='todo'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('todo')
                            }}>
                            Todo
                        </Button>
                        <Button id='react'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('react')
                            }}>
                            React
                        </Button>
        
                        <Button id='php'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('php')
                            }}>
                            PHP
                        </Button>
        
                        <Button id='C#'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('C#')
                            }}>
                            C#
                        </Button>
                        <Button id='java'
                            rounded='xl'
                            colorScheme='teal'
                            variant='outline'
                            onClickCapture={() => {
                                setTecnologia('java')
                            }}>
                            Java
                        </Button>
                        <Button id='python'
                            rounded='xl'
                            colorScheme='teal'
                            variant='solid'
                            onClickCapture={() => {
                                setTecnologia('python')
                            }}>
                            Python
                        </Button>
        
                    </HStack>
                    </>
                )
            }
            Contenido = () => {
                return (
                    <>
                        <SimpleGrid columns={[2, null, 4]} spacing='40px' mx='2'>
                            {
                                proyectosPython.map(proyecto =>

                                    <GridItem w='100%' key={proyecto.id}>
                                        <CardProyecto 
                                            key={proyecto.id}
                                            image={proyecto.images[0]}
                                            helperText={proyecto.tech}
                                            title={proyecto.title}
                                            description={proyecto.shortDescription}
                                            linkGithub={proyecto.linkGitHub != ''? proyecto.linkGitHub :false} 
                                            linkTestOnline={proyecto.linkTestOnline === ''? false : proyecto.linkTestOnline}/>
                                    </GridItem >
                                )
                            }

                        </SimpleGrid>
                    </>
                );
            }            
            break;

    }

    return (        
        <>
            
            <Menu/>
            <Contenido />

        </>
    );
}