"use client";

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  FiArrowUpRight,
  FiCheck,
  FiMessageCircle,
} from "react-icons/fi";

import { motion } from "motion/react";

const MotionBox = motion.create(Box);

export function FinalCTA() {
  return (
    <Box
      as="section"
      id="contato"
      position="relative"
      overflow="hidden"
      bg="#173B2A"
      py={{ base: "80px", md: "110px" }}
    >
      {/* ELEMENTOS DECORATIVOS */}
      <Box
        position="absolute"
        top="-180px"
        right="-150px"
        w={{ base: "300px", md: "500px" }}
        h={{ base: "300px", md: "500px" }}
        borderRadius="full"
        border="1px solid rgba(255,255,255,0.08)"
      />

      <Box
        position="absolute"
        top="-120px"
        right="-90px"
        w={{ base: "220px", md: "380px" }}
        h={{ base: "220px", md: "380px" }}
        borderRadius="full"
        border="1px solid rgba(255,255,255,0.06)"
      />

      <Box
        position="absolute"
        bottom="-180px"
        left="-160px"
        w={{ base: "300px", md: "450px" }}
        h={{ base: "300px", md: "450px" }}
        borderRadius="full"
        border="1px solid rgba(255,255,255,0.06)"
      />

      <Container
        maxW="1100px"
        position="relative"
        zIndex="1"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          justify="space-between"
          gap={{ base: "45px", lg: "70px" }}
        >
          {/* TEXTO */}
          <Stack
            gap="20px"
            maxW="680px"
          >
            <Badge
              alignSelf="flex-start"
              px="12px"
              py="6px"
              borderRadius="full"
              bg="rgba(168, 201, 155, 0.12)"
              color="#A8C99B"
              fontSize="10px"
              fontWeight="700"
              letterSpacing="1.5px"
              textTransform="uppercase"
            >
              Vamos conversar
            </Badge>

            <Heading
              as="h2"
              fontSize={{
                base: "38px",
                sm: "44px",
                md: "56px",
              }}
              lineHeight="1.04"
              letterSpacing="-2.5px"
              fontWeight="800"
              color="white"
            >
              Seu negócio já está crescendo.
              <Box
                as="span"
                display="block"
                color="#A8C99B"
                mt="6px"
              >
                Sua presença digital também pode.
              </Box>
            </Heading>

            <Text
              maxW="600px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.75"
              color="rgba(255,255,255,0.68)"
            >
              Conte para a Semente Digital o que você precisa. Vamos entender
              seu projeto e encontrar uma solução digital que faça sentido
              para o seu negócio.
            </Text>

            {/* BENEFÍCIOS */}
            <Stack
              gap="10px"
              mt="5px"
            >
              <HStack gap="10px">
                <Flex
                  w="22px"
                  h="22px"
                  borderRadius="full"
                  bg="rgba(168, 201, 155, 0.14)"
                  color="#A8C99B"
                  align="center"
                  justify="center"
                  flexShrink="0"
                >
                  <FiCheck size={12} />
                </Flex>

                <Text
                  fontSize="12px"
                  color="rgba(255,255,255,0.65)"
                >
                  Atendimento próximo e personalizado
                </Text>
              </HStack>

              <HStack gap="10px">
                <Flex
                  w="22px"
                  h="22px"
                  borderRadius="full"
                  bg="rgba(168, 201, 155, 0.14)"
                  color="#A8C99B"
                  align="center"
                  justify="center"
                  flexShrink="0"
                >
                  <FiCheck size={12} />
                </Flex>

                <Text
                  fontSize="12px"
                  color="rgba(255,255,255,0.65)"
                >
                  Projetos pensados para cada negócio
                </Text>
              </HStack>

              <HStack gap="10px">
                <Flex
                  w="22px"
                  h="22px"
                  borderRadius="full"
                  bg="rgba(168, 201, 155, 0.14)"
                  color="#A8C99B"
                  align="center"
                  justify="center"
                  flexShrink="0"
                >
                  <FiCheck size={12} />
                </Flex>

                <Text
                  fontSize="12px"
                  color="rgba(255,255,255,0.65)"
                >
                  Suporte e acompanhamento após a entrega
                </Text>
              </HStack>
            </Stack>
          </Stack>

          {/* CARD DE CONTATO */}
          <MotionBox
            w="100%"
            maxW={{ base: "100%", lg: "350px" }}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Box
              bg="rgba(255,255,255,0.07)"
              border="1px solid rgba(255,255,255,0.10)"
              borderRadius={{ base: "22px", md: "26px" }}
              p={{ base: "25px", md: "30px" }}
              backdropFilter="blur(10px)"
            >
              <Stack gap="20px">
                <Flex
                  w="48px"
                  h="48px"
                  borderRadius="14px"
                  bg="#A8C99B"
                  color="#173B2A"
                  align="center"
                  justify="center"
                >
                  <FiMessageCircle size={21} />
                </Flex>

                <Stack gap="7px">
                  <Text
                    fontSize="18px"
                    fontWeight="700"
                    color="white"
                  >
                    Vamos tirar seu projeto do papel?
                  </Text>

                  <Text
                    fontSize="12px"
                    lineHeight="1.65"
                    color="rgba(255,255,255,0.55)"
                  >
                    Fale diretamente com a Semente Digital pelo WhatsApp.
                  </Text>
                </Stack>

                <Link
                    href="https://wa.me/5521996675487?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Semente%20Digital%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
                    target="_blank"
                >
                    <Flex
                    rel="noopener noreferrer"
                    align="center"
                    justify="center"
                    gap="9px"
                    w="100%"
                    h="50px"
                    borderRadius="full"
                    bg="#A8C99B"
                    color="#173B2A"
                    fontSize="12px"
                    fontWeight="800"
                    textDecoration="none"
                    transition="all 0.25s ease"
                    _hover={{
                        bg: "#B9D5AE",
                        transform: "translateY(-2px)",
                        boxShadow:
                        "0 10px 25px rgba(0,0,0,0.15)",
                    }}
                    >
                    Quero conversar sobre meu projeto
                    <FiArrowUpRight size={16} />
                    </Flex>
                </Link>

                <Text
                  textAlign="center"
                  fontSize="10px"
                  color="rgba(255,255,255,0.35)"
                >
                  Sem compromisso. Vamos começar pela conversa.
                </Text>
              </Stack>
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}