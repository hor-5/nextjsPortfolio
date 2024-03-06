import { Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
//const Lottie = dynamic(()=>import('react-lottie'))
//import * as animationData from '../public/lottie-files/loading-pizza.json'
import React, { useEffect, useRef } from 'react'

export default function Loader() {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    //Lotie animation
    function SpinnerPizza() {

        return (
            <>
                <lottie-player
                    id="loaderLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/assets/loading-pizza.json"
                    height='100vh'
                    width='100vw'
                ></lottie-player>

            </>
        )
    }

    return (
        <Flex className="loader">
            <SpinnerPizza />
        </Flex>
    )
}