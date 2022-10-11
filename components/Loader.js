import {Flex, Image } from '@chakra-ui/react'

export default function Loader(){
    return(
        <Flex className="loader">            
            <Image alt='loader'                 
                src="https://freight.cargo.site/t/original/i/77b4b4d3a50d7b251f44a053f28ceabed1152adc7affb64a679831964393a8bc/montrium_vaskov_graphic_design_005.gif"/>     
        </Flex>
    )
}