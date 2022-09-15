import React from 'react'
import Head from 'next/head'
import {Flex, Heading} from '@chakra-ui/react'

export default function Portfolio(){

    return(
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Flex height="100vh" justifyContent="center" background="gray.100">

                <Heading> Portfolio </Heading>

            </Flex>
        </>
    )

}