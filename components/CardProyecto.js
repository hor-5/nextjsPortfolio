import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  HStack,
  IconButton,
  ButtonGroup,
  Divider,
} from '@chakra-ui/react';
import { VscGithub, VscInspect } from "react-icons/vsc";

export default function CardProyecto(props) {


  return (
    <Center py={6}
            _hover={{
              transform: 'translateY(-5px)',      
              transition:'0.7s',
            }} >
      <Box
        minH='430px'
        maxH='430px'
        maxW='300px'
        w='full'
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow='2xl'
        rounded='md'
        p={6}
        overflow='hidden'>
        <Box
          h='fit-content'
          bg='gray.100'
          mt={-6}
          mx={-6}
          mb={6}
          pos='relative'>
          <Image
            src={props.image}
            layout='fill'
            alt={props.title}
          />
        </Box>
        <Stack>
          <Text
            color='green.500'
            textTransform='uppercase'
            fontWeight={800}
            fontSize='sm'
            letterSpacing={1.1}>

            {props.helperText}

          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize='2xl'
            fontFamily='body'>

            {props.title}

          </Heading>
          <Text color='gray.500'>
            {props.description}

          </Text>
        </Stack>

        <Divider my='2'/>
        <HStack mt='auto' justifyContent='end'>
          <ButtonGroup spacing='6'>
            <a href={props.linkGithub} target="_blank" rel="noreferrer">
              <IconButton
                colorScheme={props.linkGithub?'cyan':'gray'}
                color={useColorModeValue('white', 'blue.800')}
                rounded='full'
                aria-label='Call Sage'
                fontSize='30px'
                icon={<VscGithub />}
                disabled={!props.linkGithub}
              />
            </a>
            <a href={props.linkTestOnline} target="_blank" rel="noreferrer">
              <IconButton
                colorScheme={props.linkTestOnline?'cyan':'gray'}
                color={useColorModeValue('white', 'blue.800')}
                rounded='full'
                aria-label='Call Sage'
                fontSize='30px'
                icon={<VscInspect />}
                disabled={!props.linkTestOnline}
              />
            </a>
          </ButtonGroup>
        </HStack>

      </Box>
    </Center>
  );
}