"use client";

import {
  Badge,
  Box,
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
  FiArrowUpRight,
  FiBarChart2,
  FiCode,
  FiCompass,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const differentials = [
  {
    number: "01",
    icon: FiCompass,
    title: "Agilidade sem abrir mão da qualidade",
    description:
      "Trabalhamos com processos organizados para entregar projetos com rapidez, sem deixar de lado os detalhes que fazem a diferença.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Atenção ao cliente",
    description:
      "Você não fica perdido depois de contratar. Mantemos uma comunicação clara durante o projeto e estamos disponíveis para orientar, esclarecer dúvidas e fazer os ajustes necessários.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Entendemos antes de desenvolver",
    description:
      "Antes de começar, buscamos entender seu negócio, sua necessidade e o objetivo do projeto para transformar sua ideia em uma solução que realmente faça sentido.",
  },
  {
    number: "04",
    icon: FiZap,
    title: "Cuidado em cada detalhe",
    description:
      "Revisamos cada etapa do projeto para garantir que layout, conteúdo, responsividade e funcionamento estejam alinhados ao que foi planejado.",
  },
  {
    number: "05",
    icon: FiBarChart2,
    title: "Mais do que entregar, buscamos agregar",
    description:
      "Quando identificamos uma oportunidade de melhorar o projeto, buscamos orientar e contribuir além da execução básica da tarefa.",
  },
];

export function Differentials() {
  return (
    <Box
      as="section"
      id="diferenciais"
      bg="#173B2A"
      color="white"
      py={{ base: "80px", md: "120px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Elementos decorativos */}
      <Box
        position="absolute"
        top="-220px"
        right="-180px"
        w="500px"
        h="500px"
        borderRadius="full"
        border="1px solid rgba(255,255,255,0.06)"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="-280px"
        left="-220px"
        w="520px"
        h="520px"
        borderRadius="full"
        border="1px solid rgba(168,201,155,0.08)"
        pointerEvents="none"
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex="1"
      >
        {/* Cabeçalho */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "flex-end" }}
          gap="35px"
          mb={{ base: "50px", md: "70px" }}
        >
          <Stack
            gap="18px"
            maxW="700px"
          >
            <Badge
              alignSelf="flex-start"
              px="12px"
              py="6px"
              borderRadius="full"
              bg="rgba(168,201,155,0.12)"
              color="#A8C99B"
              fontSize="10px"
              fontWeight="700"
              letterSpacing="1.4px"
              textTransform="uppercase"
            >
              Por que a Semente Digital
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "34px", md: "48px" }}
              lineHeight="1.08"
              letterSpacing="-2px"
              fontWeight="800"
              color="white"
            >
              Não criamos apenas sites.
              <br />
              Criamos{" "}
              <Box
                as="span"
                color="#A8C99B"
              >
                presença digital.
              </Box>
            </Heading>

            <Text
              maxW="650px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              color="rgba(255,255,255,0.68)"
            >
              Um bom site precisa fazer mais do que existir. Ele precisa
              representar sua marca, transmitir confiança e facilitar o
              caminho entre seu negócio e seus próximos clientes.
            </Text>
          </Stack>

          <HStack
            gap="10px"
            color="rgba(255,255,255,0.55)"
            flexShrink="0"
          >
            <Box
              w="7px"
              h="7px"
              borderRadius="full"
              bg="#A8C99B"
            />

            <Text
              fontSize="11px"
              fontWeight="600"
              letterSpacing="1px"
              textTransform="uppercase"
            >
              Estratégia • Design • Tecnologia
            </Text>
          </HStack>
        </Flex>

        {/* Diferenciais */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap="1px"
          bg="rgba(255,255,255,0.10)"
          border="1px solid rgba(255,255,255,0.10)"
          borderRadius={{ base: "22px", md: "28px" }}
          overflow="hidden"
        >
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionBox
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <Box
                  h="100%"
                  minH={{ base: "250px", md: "280px" }}
                  bg="#173B2A"
                  p={{ base: "28px", md: "32px" }}
                  position="relative"
                  transition="background 0.25s ease"
                  _hover={{
                    bg: "#1B4532",
                  }}
                >
                  {/* Topo */}
                  <Flex
                    justify="space-between"
                    align="flex-start"
                    mb="35px"
                  >
                    <Flex
                      w="44px"
                      h="44px"
                      borderRadius="13px"
                      align="center"
                      justify="center"
                      bg="rgba(168,201,155,0.10)"
                      color="#A8C99B"
                    >
                      <Icon size={20} />
                    </Flex>

                    <Text
                      fontSize="11px"
                      fontWeight="700"
                      letterSpacing="1.2px"
                      color="rgba(255,255,255,0.30)"
                    >
                      {item.number}
                    </Text>
                  </Flex>

                  <Heading
                    as="h3"
                    fontSize={{ base: "20px", md: "22px" }}
                    letterSpacing="-0.5px"
                    color="white"
                    mb="12px"
                  >
                    {item.title}
                  </Heading>

                  <Text
                    fontSize="13px"
                    lineHeight="1.7"
                    color="rgba(255,255,255,0.58)"
                    maxW="340px"
                  >
                    {item.description}
                  </Text>

                  {/* Linha inferior */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    w="0"
                    h="2px"
                    bg="#A8C99B"
                    transition="width 0.3s ease"
                    _groupHover={{
                      w: "100%",
                    }}
                  />
                </Box>
              </MotionBox>
            );
          })}

          {/* Card final / CTA */}
          <MotionBox
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <Box
              h="100%"
              minH={{ base: "250px", md: "280px" }}
              bg="#A8C99B"
              color="#173B2A"
              p={{ base: "28px", md: "32px" }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.25s ease"
              _hover={{
                bg: "#B9D5AE",
              }}
            >
              <Box>
                <Text
                  fontSize="11px"
                  fontWeight="700"
                  letterSpacing="1.3px"
                  textTransform="uppercase"
                  mb="20px"
                >
                  Seu próximo projeto
                </Text>

                <Heading
                  as="h3"
                  fontSize={{ base: "23px", md: "26px" }}
                  lineHeight="1.15"
                  letterSpacing="-0.8px"
                >
                  Pronto para transformar sua presença digital?
                </Heading>
              </Box>
              <Link href="#contato">
              <HStack
              

                align="center"
                justify="space-between"
                mt="30px"
                p="12px 16px"
                borderRadius="full"
                bg="#173B2A"
                color="white"
                fontSize="12px"
                fontWeight="700"
                textDecoration="none"
                transition="all 0.2s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "#24583F",
                }}
              >
                <Text>Vamos conversar</Text>

                <Flex
                  w="28px"
                  h="28px"
                  borderRadius="full"
                  bg="rgba(255,255,255,0.12)"
                  align="center"
                  justify="center"
                >
                  <FiArrowUpRight size={15} />
                </Flex>
              </HStack>
              </Link>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}