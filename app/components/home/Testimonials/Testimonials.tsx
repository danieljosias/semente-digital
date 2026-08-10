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
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const testimonials = [
  {
    quote:
      "Excelente profissional, atendeu muito bem minha demanda, foi rápido e assertivo. Recomendo e farei outros trabalhos.",
    highlight: "Rápido e assertivo.",
  },
  {
    quote:
      "O Daniel foi sensacional do início ao fim do projeto. Entendeu exatamente o que eu precisava e eu amei o resultado!",
    highlight: "Entendeu exatamente o que eu precisava.",
  },
  {
    quote:
      "Ótimo trabalho do Daniel. Entregou rápido e bem feito. Sempre foi solícito com todas minhas dúvidas e me auxiliou no desenvolvimento.",
    highlight: "Sempre foi solícito com todas minhas dúvidas.",
  },
  {
    quote:
      "Trabalho feito no prazo e impecável.",
    highlight: "Feito no prazo e impecável.",
  },
  {
    quote:
      "Gostei muito do trabalho do Daniel, muito atento a detalhes e isso faz a diferença! Me ajudou muito.",
    highlight: "Muito atento a detalhes.",
  },
  {
    quote:
      "Excelente profissional. Pedi para ele copiar uma página exatamente igual e ele fez certinho, todos os detalhes conforme solicitado. Atualizou meu site, além de fazer a página e entregar funcionando e rodando perfeitamente. Entregou mais do que o solicitado.",
    highlight: "Entregou mais do que o solicitado.",
  },
];

export function Testimonials() {
  return (
    <Box
      as="section"
      id="depoimentos"
      bg="white"
      py={{ base: "80px", md: "120px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Elemento decorativo */}
      <Box
        position="absolute"
        top="-180px"
        right="-180px"
        w="400px"
        h="400px"
        borderRadius="full"
        border="1px solid rgba(109, 157, 104, 0.08)"
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
          gap="30px"
          mb={{ base: "45px", md: "60px" }}
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
              bg="rgba(23, 59, 42, 0.08)"
              color="#173B2A"
              fontSize="10px"
              fontWeight="700"
              letterSpacing="1.4px"
              textTransform="uppercase"
            >
              Quem já trabalhou conosco
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "34px", md: "48px" }}
              lineHeight="1.08"
              letterSpacing="-2px"
              fontWeight="800"
              color="#173B2A"
            >
              Mais do que projetos,
              <br />
              <Box
                as="span"
                color="#6D9D68"
              >
                construímos confiança.
              </Box>
            </Heading>

            <Text
              maxW="620px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              color="#657069"
            >
              Cada projeto é uma oportunidade de entender uma necessidade,
              resolver um problema e entregar uma experiência que faça
              diferença para o cliente.
            </Text>
          </Stack>

          {/* Indicador de avaliações */}
          <Flex
            align="center"
            gap="12px"
            flexShrink="0"
          >
            <Flex
              w="46px"
              h="46px"
              borderRadius="14px"
              bg="#EEF4EC"
              color="#6D9D68"
              align="center"
              justify="center"
            >
              <FiStar
                size={20}
                fill="currentColor"
              />
            </Flex>

            <Stack gap="2px">
              <Text
                fontSize="13px"
                fontWeight="700"
                color="#173B2A"
              >
                Clientes satisfeitos
              </Text>

              <Text
                fontSize="11px"
                color="#7A847D"
              >
                Experiências reais de projetos
              </Text>
            </Stack>
          </Flex>
        </Flex>

        {/* Depoimento em destaque */}
        <MotionBox
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
          mb="18px"
        >
          <Box
            bg="#173B2A"
            borderRadius={{ base: "22px", md: "28px" }}
            p={{ base: "30px", md: "50px" }}
            position="relative"
            overflow="hidden"
          >
            {/* Aspas decorativas */}
            <Text
              position="absolute"
              top="-15px"
              right="25px"
              fontSize="150px"
              lineHeight="1"
              fontFamily="Georgia, serif"
              color="rgba(168, 201, 155, 0.10)"
              userSelect="none"
            >
              "
            </Text>

            <Stack
              gap="25px"
              position="relative"
              zIndex="1"
            >
              <HStack gap="4px">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={15}
                    fill="#A8C99B"
                    color="#A8C99B"
                  />
                ))}
              </HStack>

              <Text
                fontSize={{
                  base: "20px",
                  md: "27px",
                  lg: "30px",
                }}
                lineHeight="1.45"
                letterSpacing="-0.5px"
                fontWeight="500"
                color="white"
                maxW="900px"
              >
                “{testimonials[5].quote}”
              </Text>

              <Flex
                align="center"
                gap="10px"
              >
                <Flex
                  w="34px"
                  h="34px"
                  borderRadius="full"
                  bg="rgba(168, 201, 155, 0.14)"
                  align="center"
                  justify="center"
                  color="#A8C99B"
                >
                  <FiCheckCircle size={16} />
                </Flex>

                <Text
                  fontSize="11px"
                  fontWeight="600"
                  letterSpacing="0.8px"
                  color="rgba(255,255,255,0.60)"
                  textTransform="uppercase"
                >
                  Depoimento de cliente
                </Text>
              </Flex>
            </Stack>
          </Box>
        </MotionBox>

        {/* Cards */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap="18px"
        >
          {testimonials.slice(0, 5).map((testimonial, index) => (
            <MotionBox
              key={index}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >
              <Box
                h="100%"
                minH="260px"
                border="1px solid #E3E9E4"
                borderRadius={{ base: "20px", md: "24px" }}
                p={{ base: "24px", md: "28px" }}
                bg="white"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                transition="all 0.25s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 18px 40px rgba(23, 59, 42, 0.08)",
                  borderColor: "#D3DDD5",
                }}
              >
                <Stack gap="20px">
                  <HStack gap="4px">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        size={13}
                        fill="#6D9D68"
                        color="#6D9D68"
                      />
                    ))}
                  </HStack>

                  <Text
                    fontSize="14px"
                    lineHeight="1.75"
                    color="#4F5952"
                  >
                    “{testimonial.quote}”
                  </Text>
                </Stack>

                <Box
                  mt="25px"
                  pt="18px"
                  borderTop="1px solid #E8EDE9"
                >
                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    letterSpacing="1px"
                    textTransform="uppercase"
                    color="#6D9D68"
                  >
                    Cliente Semente Digital
                  </Text>

                  <Text
                    mt="5px"
                    fontSize="10px"
                    color="#929B95"
                  >
                    {testimonial.highlight}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* CTA */}
        <Flex
          mt={{ base: "40px", md: "55px" }}
          p={{ base: "24px", md: "30px" }}
          borderRadius={{ base: "20px", md: "24px" }}
          bg="#F7F9F6"
          border="1px solid #E3E9E4"
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap="20px"
        >
          <Stack gap="5px">
            <Text
              fontSize="15px"
              fontWeight="700"
              color="#173B2A"
            >
              Seu projeto pode ser o próximo.
            </Text>

            <Text
              fontSize="12px"
              color="#737D76"
            >
              Vamos conversar sobre o que você precisa.
            </Text>
          </Stack>

          <Link href="#contato">
          <Flex
          
            
            align="center"
            gap="10px"
            px="18px"
            h="44px"
            borderRadius="full"
            bg="#173B2A"
            color="white"
            fontSize="12px"
            fontWeight="700"
            textDecoration="none"
            transition="all 0.2s ease"
            _hover={{
              bg: "#24583F",
              transform: "translateY(-2px)",
            }}
          >
            Quero meu projeto
            <FiArrowUpRight size={15} />
          </Flex>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}