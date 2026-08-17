"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiMousePointer,
  FiTrendingUp,
} from "react-icons/fi";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

export function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="#F7F9F6"
      pt={{ base: "130px", md: "160px" }}
      pb={{ base: "70px", md: "100px" }}
    >
      {/* Elementos decorativos de fundo */}
      <Box
        position="absolute"
        top="-180px"
        right="-180px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="rgba(168, 201, 155, 0.16)"
        filter="blur(2px)"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="-250px"
        left="-200px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="rgba(23, 59, 42, 0.05)"
        pointerEvents="none"
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex="1"
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "55px", lg: "70px" }}
          alignItems="center"
        >
          {/* =========================
              CONTEÚDO
          ========================== */}
          <Stack gap={{ base: "24px", md: "28px" }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                display="inline-flex"
                alignItems="center"
                gap="8px"
                px="13px"
                py="7px"
                borderRadius="full"
                bg="rgba(23, 59, 42, 0.08)"
                color="black"
                fontSize="11px"
                fontWeight="700"
                letterSpacing="1.2px"
                textTransform="uppercase"
              >
                <Box
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  bg="#57c9b5"
                />

                Estratégia + Design + Tecnologia
              </Badge>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Heading
                as="h1"
                maxW="700px"
                fontSize={{
                  base: "42px",
                  sm: "50px",
                  md: "60px",
                  lg: "64px",
                }}
                lineHeight="1.04"
                letterSpacing="-2.8px"
                fontWeight="800"
                color="#000000"
              >
                Seu negócio merece um site tão profissional quanto o {" "}
                <Box
                  as="span"
                  color="#57c9b5"
                >
                  trabalho que você oferece.
                </Box>
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Text
                maxW="590px"
                fontSize={{ base: "16px", md: "18px" }}
                lineHeight="1.7"
                color="#58635C"
              >
                Criamos sites e landing pages personalizados,
                 com atenção aos detalhes, atendimento próximo e
                  agilidade em cada etapa.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Text
                maxW="590px"
                fontSize={{ base: "16px", md: "18px" }}
                lineHeight="1.7"
                color="#58635C"
                fontWeight="bold"
              >
                Não apenas entregamos. Buscamos fazer melhor.
              </Text>
            </MotionBox>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap="12px"
                align={{ base: "stretch", sm: "center" }}
              >
                <Link href="/contato">
                    <Button
                   
                    
                    h="54px"
                    px="25px"
                    borderRadius="full"
                    bg="#57c9b5"
                    color="white"
                    fontSize="14px"
                    fontWeight="600"
                    gap="10px"
                    transition="all 0.25s ease"
                    _hover={{
                        bg: "#57c9b5",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 25px rgba(23, 59, 42, 0.18)",
                    }}
                    >
                    Quero transformar minha presença digital
                    <FiArrowRight />
                    </Button>
                </Link>

                <Link href="#projetos">
                    <Button
                    variant="outline"
                    h="54px"
                    px="24px"
                    borderRadius="full"
                    borderColor="#D5DDD7"
                    color="#173B2A"
                    bg="transparent"
                    fontSize="14px"
                    fontWeight="600"
                    transition="all 0.25s ease"
                    _hover={{
                        bg: "white",
                        borderColor: "#57c9b5",
                    }}
                    >
                    Ver projetos
                    </Button>
                </Link>  
              </Flex>
            </MotionBox>

  
          </Stack>

          {/* =========================
              MOCKUP / VISUAL
          ========================== */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            position="relative"
          >
            <Box
              position="relative"
              maxW="560px"
              mx="auto"
            >
              {/* Card principal */}
              <Box
                bg="white"
                border="1px solid #E4EAE5"
                borderRadius={{ base: "20px", md: "28px" }}
                overflow="hidden"
                boxShadow="0 25px 70px rgba(23, 59, 42, 0.12)"
              >
                {/* Barra do navegador */}
                <Flex
                  h="48px"
                  px="18px"
                  align="center"
                  justify="space-between"
                  borderBottom="1px solid #EDF0EE"
                >
                  <HStack gap="6px">
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg="#D9DFDB"
                    />
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg="#D9DFDB"
                    />
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg="#D9DFDB"
                    />
                  </HStack>

                  <Box
                    w="150px"
                    h="7px"
                    borderRadius="full"
                    bg="#F0F3F1"
                  />
                </Flex>

                {/* Conteúdo do mockup */}
                <Box
                  px={{ base: "22px", md: "34px" }}
                  py={{ base: "25px", md: "35px" }}
                  bg="#FBFCFB"
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    mb="35px"
                  >
                    <HStack gap="8px">
                      <Flex
                        w="30px"
                        h="30px"
                        borderRadius="9px"
                        bg="#57c9b5"
                        align="center"
                        justify="center"
                        color="white"
                        fontWeight="700"
                        fontSize="13px"
                      >
                        S
                      </Flex>

                      <Text
                        fontSize="10px"
                        fontWeight="800"
                        letterSpacing="1px"
                        color="#173B2A"
                      >
                        SUA EMPRESA
                      </Text>
                    </HStack>

                    <Box
                      w="80px"
                      h="8px"
                      borderRadius="full"
                      bg="#E8ECE9"
                    />
                  </Flex>

                  <Stack gap="15px">
                    <Box
                      w="75%"
                      h="18px"
                      borderRadius="full"
                      bg="#b7e595"
                    />

                    <Box
                      w="55%"
                      h="18px"
                      borderRadius="full"
                      bg="#57c9b5"
                    />

                    <Box
                      w="90%"
                      h="8px"
                      borderRadius="full"
                      bg="#E5EAE6"
                      mt="8px"
                    />

                    <Box
                      w="78%"
                      h="8px"
                      borderRadius="full"
                      bg="#E5EAE6"
                    />
                    <Box
                      w="58%"
                      h="8px"
                      borderRadius="full"
                      bg="#E5EAE6"
                    />

                    
                  </Stack>

                  <SimpleGrid
                    columns={3}
                    gap="10px"
                    mt="35px"
                  >
                    {[1, 2, 3].map((item) => (
                      <Box
                        key={item}
                        h="80px"
                        borderRadius="12px"
                        bg="white"
                        border="1px solid #EDF0EE"
                      />
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>

              {/* Card SEO */}
              <MotionBox
                position="absolute"
                top={{ base: "-20px", md: "-30px" }}
                right={{ base: "-8px", md: "-30px" }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Box
                  bg="white"
                  border="1px solid #E4EAE5"
                  borderRadius="16px"
                  px="14px"
                  py="12px"
                  boxShadow="0 12px 30px rgba(23, 59, 42, 0.10)"
                >
                  <HStack gap="9px">
                    <Flex
                      w="34px"
                      h="34px"
                      borderRadius="10px"
                      align="center"
                      justify="center"
                      bg="#E9F1E7"
                      color="#4E794A"
                    >
                      <FiTrendingUp />
                    </Flex>

                    <Box>
                      <Text
                        fontSize="10px"
                        color="#7A847D"
                        fontWeight="500"
                      >
                        Crescimento
                      </Text>

                      <Text
                        fontSize="14px"
                        color="#173B2A"
                        fontWeight="700"
                      >
                        + oportunidades
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </MotionBox>

              {/* Card conversão */}
              <MotionBox
                position="absolute"
                bottom={{ base: "-20px", md: "-28px" }}
                left={{ base: "-8px", md: "-35px" }}
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Box
                  bg="white"
                  color="#366641"
                  borderRadius="16px"
                  px="15px"
                  py="13px"
                  boxShadow="0 15px 35px rgba(23, 59, 42, 0.22)"
                >
                  <HStack gap="10px">
                    <Flex
                      w="34px"
                      h="34px"
                      borderRadius="10px"
                      align="center"
                      justify="center"
                      bg="#E9F1E7"
                    >
                      <FiMousePointer />
                    </Flex>

                    <Box>
                      <Text
                        fontSize="10px"
                        color="#7A847D"
                      >
                        Experiência
                      </Text>

                      <Text
                        fontSize="14px"
                        fontWeight="700"
                      >
                        Foco em conversão
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </MotionBox>

              {/* Ícone de performance */}
              <Flex
                position="absolute"
                right={{ base: "10px", md: "25px" }}
                bottom="-45px"
                w="48px"
                h="48px"
                borderRadius="14px"
                bg="#57c9b5"
                color="#173B2A"
                align="center"
                justify="center"
                boxShadow="0 12px 25px rgba(23, 59, 42, 0.12)"
              >
                <FiBarChart2 size={21} />
              </Flex>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}