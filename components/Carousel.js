import {
  SlideFade,
  Flex,
  Button,
  Box,
  Image
} from '@chakra-ui/react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'

export default function Carousel(props) {

  const [selectedImg, setSelectedImg] = useState(null)
  
  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <Flex height='300px' width='400px' >
          <Box id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel">
            <div className="carousel-inner">
              <SlideFade in={true} offsetY='50px'>

                <div class="carousel-item active" >
                  <Image as={motion.img}
                         cursor='zoom-in'
                         layoutId='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
                         onClick={()=>setSelectedImg('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')}
                         rounded='3xl'
                         boxShadow='md'
                         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                         className="d-block w-100" alt="Wild Landscape" />
                </div>


                <div class="carousel-item" >
                  <Image as={motion.img}
                        cursor='zoom-in'
                        layoutId='https://mdbcdn.b-cdn.net/img/new/slides/042.webp'
                        onClick={()=>setSelectedImg('https://mdbcdn.b-cdn.net/img/new/slides/042.webp')}        
                        rounded='3xl' 
                        boxShadow='md' 
                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" 
                        className="d-block w-100" alt="Camera" />
                </div>


                <div class="carousel-item">
                  <Image as={motion.img}
                         cursor='zoom-in'
                         layoutId='https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
                         onClick={()=>setSelectedImg('https://mdbcdn.b-cdn.net/img/new/slides/043.webp')}
                         rounded='3xl' 
                         boxShadow='md' 
                         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" 
                         className="d-block w-100" alt="Exotic Fruits" />
                </div>

                <div class="carousel-item">
                  <Image as={motion.img}
                         cursor='zoom-in'
                         layoutId='https://www.jetbrains.com/_assets/www/code-with-me/img/screenshots/feature_rich_remote_dev.e22e03d78e9e821a7c8f7ca04218d117.png'
                         onClick={()=>setSelectedImg('https://www.jetbrains.com/_assets/www/code-with-me/img/screenshots/feature_rich_remote_dev.e22e03d78e9e821a7c8f7ca04218d117.png')}
                         rounded='3xl' 
                         boxShadow='md' 
                         src="https://www.jetbrains.com/_assets/www/code-with-me/img/screenshots/feature_rich_remote_dev.e22e03d78e9e821a7c8f7ca04218d117.png" 
                         className="d-block w-100" alt="Exotic Fruits" />
                </div>

              </SlideFade>
            </div>
            <Button variant='none' rounded='3xl' top='-50px' class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </Button>
            <Button variant='none' rounded='3xl' marginLeft='265px' top='-50px' class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </Button>
          </Box>
        </Flex>
        <AnimatePresence>
          {selectedImg && 
              <Flex as={motion.div} 
                    alignItems='center'
                    justifyContent='center'
                    layoutId={selectedImg}
                    position='fixed'
                    zIndex='99'
                    top='0'
                    left='0'
                    p='15'                    
                    height='100%'
                    width='100%'
                    onClick={()=>setSelectedImg(null)}
                    cursor='zoom-out'
                    backgroundColor='rgba(0,0,0,0.5)'>
                  <Image rounded='3xl'boxShadow='xl' src={selectedImg}/>
              </Flex>
          }
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  )
}