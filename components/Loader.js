import { Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const Lottie = dynamic(()=>import('react-lottie'))
import * as animationData from '../public/lottie-files/loading-pizza.json'

export default function Loader() {

    //Lotie animation
    function SpinnerPizza() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <>
                <Lottie options={defaultOptions}
                    height='100vh'
                    width='100vw' />
            </>
        )
    }

    return (
        <Flex className="loader">
            <SpinnerPizza/>
        </Flex>
    )
}