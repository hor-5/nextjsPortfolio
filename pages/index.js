"use client"

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  CircularProgress,
  Container,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaWhatsapp, FaBriefcase } from "react-icons/fa"

// Componentes con motion
const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionVStack = motion(VStack)
const MotionText = motion(Text)

// Variantes de animación optimizadas para fluidez
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08, // Más rápido para mayor fluidez
    },
  },
}

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300, // Mayor rigidez para movimientos más rápidos
      damping: 20, // Menor amortiguación para más rebote natural
      mass: 0.8, // Menor masa para movimientos más ligeros
    },
  },
}

const decorationVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 0.7,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.1, // Más rápido
    },
  }),
}

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.5, // Más rápido
      ease: [0.34, 1.56, 0.64, 1], // Curva personalizada con ligero rebote
    },
  },
}

const floatingAnimation = {
  y: [0, -8, 0], // Movimiento más sutil
  transition: {
    duration: 3, // Más rápido
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
    ease: "easeInOut",
  },
}

// Componente Lottie - Solo renderizado en el cliente
function LinksLottie() {
  const ref = useRef(null)
  const [isClient, setIsClient] = useState(false)

  // Tamaño responsivo para la animación Lottie
  const animationSize = useBreakpointValue({
    base: { width: "180px", height: "180px" }, // Más pequeño en móviles
    sm: { width: "220px", height: "220px" }, // Tamaño medio en tablets
    md: { width: "300px", height: "300px" }, // Tamaño original en desktop
  })

  useEffect(() => {
    setIsClient(true)
    import("@lottiefiles/lottie-player")
  }, [])

  if (!isClient) {
    return <CircularProgress mt="20" isIndeterminate color="orange.500" />
  }

  return (
    <MotionBox
      initial={{ scale: 0.9, opacity: 0, y: 15 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        ...floatingAnimation,
      }}
      transition={{
        duration: 0.3, // Más rápido
        ease: "easeOut",
      }}
      filter="drop-shadow(0 10px 15px rgba(0,0,0,0.1))"
    >
      <lottie-player
        id="links-animation"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="/assets/laptopLinks.json"
        style={animationSize}
      ></lottie-player>
    </MotionBox>
  )
}

// Componente de Link individual con animaciones optimizadas
function LinkItem({ icon, text, href, index }) {
  // Todos los hooks al inicio del componente
  const [isHovered, setIsHovered] = useState(false)

  // Mover todos los useColorModeValue al nivel superior
  const buttonBg = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(45, 55, 72, 0.8)")
  const buttonHoverBg = useColorModeValue(
    "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
    "linear-gradient(135deg, #ff5e62 0%, #ff9966 100%)",
  )
  const buttonColor = useColorModeValue("gray.700", "white")
  const buttonHoverColor = "white"
  const iconBg = useColorModeValue("orange.100", "orange.700")
  const circleBg = useColorModeValue("white", "gray.800")

  // Ajustar tamaño del botón para móviles
  const buttonHeight = useBreakpointValue({ base: "60px", md: "65px" })
  const buttonPadding = useBreakpointValue({ base: 4, md: 5 })
  const iconSize = useBreakpointValue({ base: 5, md: 6 })
  const fontSize = useBreakpointValue({ base: "md", md: "lg" })
  const marginBottom = useBreakpointValue({ base: 3, md: 5 })

  return (
    <MotionBox
      variants={itemVariants}
      position="relative"
      mb={marginBottom}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      custom={index}
      perspective={1000}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {/* Circle connector with pulse animation */}
      <MotionBox
        position="absolute"
        left="-12px"
        top="30px"
        width="20px"
        height="20px"
        borderRadius="full"
        bg={circleBg}
        border="3px solid"
        borderColor="orange.400"
        zIndex={1}
        animate={{
          boxShadow: isHovered
            ? ["0 0 0 0 rgba(237, 137, 54, 0.4)", "0 0 0 8px rgba(237, 137, 54, 0)", "0 0 0 0 rgba(237, 137, 54, 0)"]
            : "none",
        }}
        transition={{
          duration: 1.2, // Más rápido
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          repeatType: "loop",
        }}
      />

      <Link href={href} legacyBehavior>
        <Button
          as="a"
          width="100%"
          height={buttonHeight}
          bg={buttonBg}
          color={buttonColor}
          rounded="2xl"
          p={buttonPadding}
          boxShadow={useColorModeValue(
            "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 4px -2px rgba(0, 0, 0, 0.05)",
            "0 8px 12px -3px rgba(0, 0, 0, 0.2), 0 3px 4px -2px rgba(0, 0, 0, 0.1)",
          )}
          position="relative"
          overflow="hidden"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor={useColorModeValue("gray.100", "gray.600")}
          _hover={{
            background: buttonHoverBg,
            color: buttonHoverColor,
          }}
          transition="all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)" // Curva personalizada con rebote sutil
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background gradient on hover con transición más rápida */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={isHovered ? 1 : 0}
            bgGradient="linear(to-r, orange.400, red.400)"
            transition="opacity 0.15s ease" // Más rápido
            borderRadius="2xl"
          />

          <HStack width="100%" justifyContent="space-between" position="relative" zIndex={1}>
            <HStack spacing={3}>
              <MotionFlex
                bg={isHovered ? "white" : iconBg}
                color={isHovered ? "orange.500" : "inherit"}
                borderRadius="xl"
                p={2.5}
                justifyContent="center"
                alignItems="center"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? [0, -5, 5, 0] : 0, // Micro-animación de rotación
                }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  rotate: { duration: 0.4, ease: "easeInOut" },
                }}
                boxShadow={isHovered ? "0 0 0 3px rgba(255,255,255,0.3)" : "none"}
              >
                <Icon as={icon} boxSize={iconSize} />
              </MotionFlex>
              <VStack align="start" spacing={0}>
                <MotionText
                  fontWeight="bold"
                  fontSize={fontSize}
                  animate={{
                    y: isHovered ? [-1, 0] : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  {text}
                </MotionText>
                <MotionText
                  fontSize="xs"
                  opacity={isHovered ? 1 : 0.8}
                  color={isHovered ? "white" : "gray.500"}
                  animate={{
                    opacity: isHovered ? 1 : 0.8,
                    y: isHovered ? [2, 0] : 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  {text === "GitHub"
                    ? "Ver repositorios"
                    : text === "LinkedIn"
                      ? "Perfil profesional"
                      : text === "WhatsApp"
                        ? "Contacto directo"
                        : "Ver proyectos"}
                </MotionText>
              </VStack>
            </HStack>

            {/* Badge indicator con animación mejorada */}
            {index === 0 && (
              <MotionBox
                animate={{
                  scale: isHovered ? [1, 1.1, 1.05] : 1,
                  transition: {
                    duration: 0.3,
                    times: [0, 0.6, 1],
                  },
                }}
              >
              </MotionBox>
            )}
          </HStack>
        </Button>
      </Link>
    </MotionBox>
  )
}

// Componente principal
export default function LinkTree() {
  const [isMounted, setIsMounted] = useState(false)

  // Todos los hooks al inicio del componente
  const bgColor = useColorModeValue(
    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
  )
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(26, 32, 44, 0.7)")
  const headingColor = useColorModeValue("gray.700", "white")
  const subHeadingColor = useColorModeValue("gray.500", "gray.300")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const animationBg = useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(45, 55, 72, 0.7)")
  const animationBorderColor = useColorModeValue("gray.100", "gray.600")
  const tagBg = useColorModeValue("white", "gray.700")
  const tagBorderColor = useColorModeValue("gray.100", "gray.600")

  // Ajustes responsivos para el layout
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 })
  const cardPadding = useBreakpointValue({ base: 6, md: 8, lg: 12 })
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" })
  const subHeadingSize = useBreakpointValue({ base: "md", md: "lg" })
  const marginBottom = useBreakpointValue({ base: 6, md: 10 })
  const marginRight = useBreakpointValue({ base: 0, md: 12 })
  const animationPadding = useBreakpointValue({ base: 4, md: 6 })
  const tagBottomPosition = useBreakpointValue({ base: "-10px", md: "-15px" })
  const tagFontSize = useBreakpointValue({ base: "xs", md: "sm" })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Definimos los links que queremos mostrar
  const links = [
    { icon: FaGithub, text: "GitHub", href: "https://github.com/hor-5" },
    { icon: FaLinkedin, text: "LinkedIn", href: "https://ar.linkedin.com/in/horacio-capdevila-b8aa666b" },
    { icon: FaWhatsapp, text: "WhatsApp", href: "https://wa.me/+541156005242" },
    { icon: FaBriefcase, text: "Portfolio", href: "/Portfolio" },
  ]

  // Elementos decorativos
  const decorations = [
    { top: "10%", right: "15%", size: "100px", color: "orange.300", delay: 0 },
    { top: "60%", left: "5%", size: "150px", color: "red.300", delay: 1 },
    { bottom: "10%", right: "20%", size: "120px", color: "yellow.300", delay: 2 },
  ]

  // Si no está montado, mostramos un esqueleto básico para evitar errores de hidratación
  if (!isMounted) {
    return (
      <Flex boxShadow="lg" bg="gray.100" minHeight="100vh" alignItems="center" justifyContent="center" p={4}>
        <CircularProgress isIndeterminate color="orange.500" />
      </Flex>
    )
  }

  return (
    <Box
      minHeight="100vh"
      bgGradient={bgColor}
      backgroundAttachment="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={containerPadding}
      position="relative"
      overflow="hidden"
    >
      {/* Elementos decorativos de fondo con animaciones más fluidas */}
      {decorations.map((dec, i) => (
        <MotionBox
          key={i}
          variants={decorationVariants}
          custom={i}
          initial="hidden"
          animate="visible"
          position="absolute"
          width={dec.size}
          height={dec.size}
          borderRadius="full"
          bg={dec.color}
          filter="blur(40px)"
          opacity="0.4"
          top={dec.top}
          right={dec.right}
          left={dec.left}
          bottom={dec.bottom}
          zIndex={0}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <Container maxW="container.lg" zIndex={1}>
        <MotionFlex
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          direction={{ base: "column", md: "row" }}
          bg={cardBg}
          backdropFilter="blur(20px)"
          p={cardPadding}
          rounded="3xl"
          boxShadow="xl"
          position="relative"
          overflow="hidden"
          border="1px solid"
          borderColor={borderColor}
        >
          {/* Left side - Animation */}
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            mb={marginBottom}
            mr={marginRight}
            position="relative"
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              bg={animationBg}
              borderRadius="2xl"
              p={animationPadding}
              boxShadow="lg"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={animationBorderColor}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
            >
              <LinksLottie />
            </MotionBox>

            {/* Etiqueta flotante con animación más fluida */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.5,
              }}
              position="absolute"
              bottom={tagBottomPosition}
              bg={tagBg}
              px={3}
              py={1.5}
              borderRadius="full"
              boxShadow="md"
              border="1px solid"
              borderColor={tagBorderColor}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
            >
              <MotionText
                fontSize={tagFontSize}
                fontWeight="bold"
                bgGradient="linear(to-r, orange.400, red.400)"
                bgClip="text"
                animate={{
                  scale: [1, 1.03, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                ¡Conecta conmigo!
              </MotionText>
            </MotionBox>
          </Flex>

          {/* Right side - Links */}
          <MotionVStack variants={itemVariants} spacing={3} align="stretch" width={{ base: "100%", md: "400px" }}>
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <Heading
                size={headingSize}
                mb={2}
                color={headingColor}
                bgGradient="linear(to-r, orange.400, red.400)"
                bgClip="text"
                letterSpacing="tight"
              >
                Conectemos
              </Heading>
              <Text color={subHeadingColor} mb={4} fontSize={subHeadingSize}>
                Encuentra todos mis perfiles profesionales aquí
              </Text>
            </MotionBox>

            {/* Tree structure with vertical line */}
            <Box position="relative" pl={6} mt={2}>
              {/* Vertical line con animación más fluida */}
              <MotionBox
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                position="absolute"
                left="12px"
                top="0"
                bottom="0"
                width="3px"
                height="100%"
                bgGradient="linear(to-b, orange.400, red.400)"
                borderRadius="full"
                zIndex={0}
              />

              {/* Links */}
              <AnimatePresence>
                {links.map((link, index) => (
                  <LinkItem key={index} icon={link.icon} text={link.text} href={link.href} index={index} />
                ))}
              </AnimatePresence>
            </Box>

          </MotionVStack>
        </MotionFlex>
      </Container>
    </Box>
  )
}
