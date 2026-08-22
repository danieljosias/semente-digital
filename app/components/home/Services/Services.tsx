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
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiShoppingBag,
  FiTool,
  FiCheck,
} from "react-icons/fi";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const services = [
  {
    icon: FiLayers,
    number: "02",
    title: "Landing Pages",
    description:
      "Páginas estratégicas para campanhas, anúncios e lançamentos, construídas com foco em clareza e conversão.",
    features: [
      "Estrutura orientada à conversão",
      "Design responsivo",
      "Integração com ferramentas",
    ],
  },
  
  {
    icon: FiTool,
    number: "03",
    title: "Evolução & Manutenção",
    description:
      "Acompanhamento técnico para manter seu projeto atualizado, seguro e preparado para continuar crescendo.",
    features: [
      "Atualizações técnicas",
      "Correções e melhorias",
      "Evolução contínua",
    ],
  },
];

export function Services() {
  return (
    <Box
      as="section"
      id="solucoes"
      bg="#F7F9F6"
      py={{ base: "80px", md: "120px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Elemento decorativo */}
      <Box
        position="absolute"
        top="-180px"
        right="-180px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="rgba(168, 201, 155, 0.12)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" zIndex="1">
        {/* Cabeçalho */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "flex-end" }}
          gap="30px"
          mb={{ base: "45px", md: "60px" }}
        >
          <Stack gap="18px" maxW="680px">
            <Badge
              alignSelf="flex-start"
              px="12px"
              py="6px"
              borderRadius="full"
              bg="rgba(23, 59, 42, 0.08)"
              color="black"
              fontSize="10px"
              fontWeight="700"
              letterSpacing="1.4px"
              textTransform="uppercase"
            >
              Soluções digitais
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "34px", md: "48px" }}
              lineHeight="1.08"
              letterSpacing="-2px"
              fontWeight="800"
              color="black"
            >
              Soluções para transformar sua{" "}
              <Box as="span" color="#57c9b5">
                presença online.
              </Box>
            </Heading>

            <Text
              maxW="620px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              color="#657069"
            >
              Do planejamento ao lançamento, criamos experiências digitais
              pensadas para posicionar sua marca, gerar autoridade e criar
              novas oportunidades.
            </Text>
          </Stack>

            <Link href="/contato">
                <Button
                   
                    
                    variant="outline"
                    borderColor="#C9D3CB"
                    color="black"
                    borderRadius="full"
                    h="48px"
                    px="20px"
                    fontSize="13px"
                    fontWeight="600"
                    gap="8px"
                    flexShrink="0"
                    _hover={{
                    bg: "white",
                    borderColor: "#57c9b5",
                    }}
                >
                    Falar sobre meu projeto
                    <FiArrowUpRight />
                </Button>
            </Link>
        </Flex>

        {/* Serviços */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap="18px"
        >
          {/* Serviço principal */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            gridRow={{ lg: "span 2" }}
          >
            <Box
              h="100%"
              minH={{ base: "420px", lg: "520px" }}
              bg="#57c9b5"
              color="black"
              borderRadius={{ base: "22px", md: "28px" }}
              p={{ base: "28px", md: "40px" }}
              position="relative"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {/* Decoração */}
              <Box
                position="absolute"
                w="300px"
                h="300px"
                borderRadius="full"
                border="1px solid rgba(255,255,255,0.08)"
                right="-100px"
                bottom="-100px"
              />

              <Box
                position="absolute"
                w="200px"
                h="200px"
                borderRadius="full"
                border="1px solid rgba(255,255,255,0.06)"
                right="-50px"
                bottom="-50px"
              />

              <Box position="relative" zIndex="1">
                <Flex
                  w="52px"
                  h="52px"
                  borderRadius="15px"
                  align="center"
                  justify="center"
                  bg="rgba(255,255,255,0.10)"
                  mb="28px"
                >
                  <FiCode size={23} />
                </Flex>

                <HStack
                  gap="10px"
                  mb="12px"
                >
                  <Text
                    fontSize="11px"
                    fontWeight="700"
                    letterSpacing="1.5px"
                    color="white"
                  >
                    01
                  </Text>

                  <Text
                    fontSize="11px"
                    fontWeight="600"
                    letterSpacing="1.3px"
                    textTransform="uppercase"
                    color="black"
                  >
                    Principal
                  </Text>
                </HStack>

                <Heading
                  as="h3"
                  fontSize={{ base: "28px", md: "36px" }}
                  lineHeight="1.1"
                  letterSpacing="-1.3px"
                  fontWeight="750"
                  mb="18px"
                >
                  Sites
                  <br />
                  Institucionais
                </Heading>

                <Text
                  maxW="440px"
                  fontSize={{ base: "14px", md: "15px" }}
                  lineHeight="1.7"
                  color="black"
                >
                  Uma presença digital profissional para empresas que querem
                  transmitir autoridade, confiança e gerar novas oportunidades
                  através da internet.
                </Text>
              </Box>

              <Box position="relative" zIndex="1">
                <Stack gap="10px" mb="28px">
                  {[
                    "Design personalizado",
                    "Experiência responsiva",
                    "Estrutura preparada para SEO",
                    "Performance e velocidade",
                  ].map((feature) => (
                    <HStack
                      key={feature}
                      gap="10px"
                      align="center"
                    >
                      <Flex
                        w="20px"
                        h="20px"
                        borderRadius="full"
                        align="center"
                        justify="center"
                        bg="white"
                        color="black"
                        flexShrink="0"
                      >
                        <FiCheck size={11} />
                      </Flex>

                      <Text
                        fontSize="12px"
                        color="black">
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
                <Link href="/contato">
                    <Button
                   
                    bg="white"
                    color="black"
                    borderRadius="full"
                    h="48px"
                    px="21px"
                    fontSize="13px"
                    fontWeight="700"
                    gap="8px"
                    _hover={{
                        bg: "black",
                        transform: "translateY(-2px)",
                        color: "white",
                    }}
                    transition="all 0.2s ease"
                    >
                    Criar meu site
                    <FiArrowUpRight />
                    </Button>
                </Link>    
              </Box>
            </Box>
          </MotionBox>

          {/* Serviços secundários */}
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <MotionBox
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (index + 1) * 0.08,
                }}
              >
                <Box
                  h="100%"
                  minH={{ base: "250px", md: "245px" }}
                  bg="white"
                  border="1px solid #E3E9E4"
                  borderRadius={{ base: "22px", md: "26px" }}
                  p={{ base: "26px", md: "32px" }}
                  transition="all 0.25s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 40px rgba(23, 59, 42, 0.08)",
                    borderColor: "#D3DDD5",
                  }}
                >
                  <Flex
                    justify="space-between"
                    align="flex-start"
                    mb="22px"
                  >
                    <Flex
                      w="44px"
                      h="44px"
                      borderRadius="13px"
                      align="center"
                      justify="center"
                      bg="#EEF4EC"
                      color="#58c8b6"
                    >
                      <Icon size={19} />
                    </Flex>

                    <Text
                      fontSize="11px"
                      fontWeight="700"
                      letterSpacing="1px"
                      color="#A0AAA3"
                    >
                      {service.number}
                    </Text>
                  </Flex>

                  <Heading
                    as="h3"
                    fontSize={{ base: "20px", md: "22px" }}
                    letterSpacing="-0.5px"
                    color="black"
                    mb="9px"
                  >
                    {service.title}
                  </Heading>

                  <Text
                    fontSize="13px"
                    lineHeight="1.6"
                    color="#737D76"
                    mb="18px"
                  >
                    {service.description}
                  </Text>

                  <Flex
                    gap="8px"
                    flexWrap="wrap"
                  >
                    {service.features.map((feature) => (
                      <Text
                        key={feature}
                        fontSize="10px"
                        fontWeight="600"
                        color="#536057"
                        bg="#F5F7F5"
                        px="9px"
                        py="5px"
                        borderRadius="full"
                      >
                        {feature}
                      </Text>
                    ))}
                  </Flex>
                </Box>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}