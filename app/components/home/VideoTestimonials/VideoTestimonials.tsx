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
  FiPlay,
} from "react-icons/fi";



import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const videoTestimonials = [
  {
    name: "Cliente 01",
    role: "Cliente Semente Digital",
    video: "/testimonials/cliente-01.mp4",
    thumbnail: "",
    quote: "Entendeu exatamente o que eu precisava.",
  },
  {
    name: "Cliente 02",
    role: "Cliente Semente Digital",
    video: "/testimonials/cliente-02.mp4",
    thumbnail: "",
    quote: "Entregou rápido e bem feito.",
  },
  {
    name: "Cliente 03",
    role: "Cliente Semente Digital",
    video: "/testimonials/cliente-03.mp4",
    thumbnail: "",
    quote: "Muito atento aos detalhes.",
  },
];

export function VideoTestimonials() {
  return (
    <Box
      as="section"
      id="depoimentos-em-video"
      bg="#F7F9F6"
      py={{ base: "80px", md: "120px" }}
      overflow="hidden"
    >
      <Container maxW="1200px">
        {/* CABEÇALHO */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "flex-end" }}
          gap="30px"
          mb={{ base: "45px", md: "60px" }}
        >
          <Stack gap="18px" maxW="700px">
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
              Experiências reais
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "34px", md: "48px" }}
              lineHeight="1.08"
              letterSpacing="-2px"
              fontWeight="800"
              color="#173B2A"
            >
              Quem já trabalhou conosco{" "}
              <Box as="span" color="#6D9D68">
                conta a experiência.
              </Box>
            </Heading>

            <Text
              maxW="640px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              color="#657069"
            >
              Mais do que falar sobre nosso trabalho, queremos mostrar o que
              nossos clientes realmente vivenciaram durante o desenvolvimento
              de seus projetos.
            </Text>
          </Stack>

          <HStack
            gap="9px"
            flexShrink="0"
            color="#657069"
          >
            <Flex
              w="38px"
              h="38px"
              borderRadius="full"
              bg="#EAF2E8"
              color="#4E794A"
              align="center"
              justify="center"
            >
                
              {/* <FiQuote size={17} /> */}
            </Flex>

            <Text
              fontSize="11px"
              fontWeight="600"
              color="#173B2A"
            >
              Depoimentos reais
            </Text>
          </HStack>
        </Flex>

        {/* VÍDEOS */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap="18px"
        >
          {videoTestimonials.map((testimonial, index) => (
            <MotionBox
              key={testimonial.name}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Box
                bg="white"
                border="1px solid #E3E9E4"
                borderRadius={{ base: "22px", md: "26px" }}
                overflow="hidden"
                transition="all 0.25s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 18px 40px rgba(23, 59, 42, 0.09)",
                  borderColor: "#D3DDD5",
                }}
              >
                {/* ÁREA DO VÍDEO */}
                <Box
                  position="relative"
                  height={{ base: "420px", md: "460px" }}
                  bg="#173B2A"
                  overflow="hidden"
                >

                    
                  <video
                    
                    src={testimonial.video}
                    poster={testimonial.thumbnail || undefined}
                    controls
                    playsInline
                    preload="metadata"
                   
                        style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        }}
                  />

                  {/* Overlay inicial */}
                  <Flex
                    position="absolute"
                    inset="0"
                    align="center"
                    justify="center"
                    pointerEvents="none"
                  >
                    <Flex
                      w="58px"
                      h="58px"
                      borderRadius="full"
                      bg="rgba(255,255,255,0.95)"
                      color="#173B2A"
                      align="center"
                      justify="center"
                      boxShadow="0 10px 30px rgba(0,0,0,0.18)"
                    >
                      <FiPlay
                        size={21}
                        fill="currentColor"
                        style={{
                          marginLeft: "3px",
                        }}
                      />
                    </Flex>
                  </Flex>
                </Box>

                {/* INFORMAÇÕES */}
                <Stack
                  p={{ base: "22px", md: "25px" }}
                  gap="12px"
                >
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight="1.45"
                    color="#173B2A"
                  >
                    “{testimonial.quote}”
                  </Text>

                  <Flex
                    justify="space-between"
                    align="center"
                    gap="15px"
                  >
                    <Box>
                      <Text
                        fontSize="12px"
                        fontWeight="700"
                        color="#173B2A"
                      >
                        {testimonial.name}
                      </Text>

                      <Text
                        fontSize="10px"
                        color="#89938C"
                        mt="3px"
                      >
                        {testimonial.role}
                      </Text>
                    </Box>

                    <Flex
                      w="32px"
                      h="32px"
                      borderRadius="full"
                      bg="#EEF4EC"
                      color="#6D9D68"
                      align="center"
                      justify="center"
                    >
                      <FiPlay size={13} />
                    </Flex>
                  </Flex>
                </Stack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* CTA */}
        <Flex
          mt={{ base: "40px", md: "55px" }}
          p={{ base: "25px", md: "32px" }}
          bg="#173B2A"
          borderRadius={{ base: "20px", md: "25px" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="20px"
        >
          <Stack gap="5px">
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="700"
              color="white"
            >
              Quer viver essa experiência no seu projeto?
            </Text>

            <Text
              fontSize="12px"
              color="rgba(255,255,255,0.58)"
            >
              Vamos entender o que sua empresa precisa.
            </Text>
          </Stack>
        
          <Link href="#contato">
            <Flex
               
                
                align="center"
                gap="9px"
                px="18px"
                h="44px"
                borderRadius="full"
                bg="#A8C99B"
                color="#173B2A"
                fontSize="12px"
                fontWeight="700"
                textDecoration="none"
                flexShrink="0"
                transition="all 0.2s ease"
                _hover={{
                bg: "#B9D5AE",
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