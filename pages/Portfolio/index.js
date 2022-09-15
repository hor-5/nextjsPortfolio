import React from 'react'
import Head from 'next/head'
import {Flex, Heading} from '@chakra-ui/react'

export default function Portfolio(){

    return(
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Flex direction="column" height="100vh" justifyContent="center" alignItems="center" background="blue.50">

                <Heading size="md">Sitio en construcción...</Heading>
                <Flex height="50%" width="50%" justifyContent="center">
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_qcrbuch7.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
                </Flex>

            </Flex>
        </>
    )

}