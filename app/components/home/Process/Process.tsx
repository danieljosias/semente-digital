"use client";

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCompass,
  FiEdit3,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const steps = [
  {
    number: "01",
    icon: FiMessageCircle,
    title: "Briefing",
    description:
      "Conversamos sobre seu negócio, objetivos, público e o que você espera alcançar com o novo projeto.",
  },
  {
    number: "02",
    icon: FiCompass,
    title: "Estratégia & Design",
    description:
      "Organizamos a estrutura do site e definimos uma experiência visual alinhada ao posicionamento da sua marca.",
  },
  {
    number: "03",
    icon: FiEdit3,
    title: "Desenvolvimento",
    description:
      "Transformamos o projeto em um site funcional, responsivo, rápido e preparado para diferentes dispositivos.",
  },
  {
    number: "04",
    icon: FiSend,
    title: "Publicação",
    description:
      "Realizamos os últimos testes, ajustes e colocamos seu projeto no ar para começar a gerar novas oportunidades.",
  },
];

export function Process() {
  return (
    <Box
      as="section"
      id="processo"
      bg="#F7F9F6"
      py={{ base: "80px", md: "120px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Elemento decorativo */}
      <Box
        position="absolute"
        left="-180px"
        bottom="-180px"
        w="400px"
        h="400px"
        borderRadius="full"
        border="1px solid rgba(109, 157, 104, 0.10)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" zIndex="1">
        {/* Cabeçalho */}
        <Stack
          gap="18px"
          maxW="720px"
          mb={{ base: "50px", md: "70px" }}
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
            Como funciona
          </Badge>

          <Heading
            as="h2"
            fontSize={{ base: "34px", md: "48px" }}
            lineHeight="1.08"
            letterSpacing="-2px"
            fontWeight="800"
            color="#173B2A"
          >
            Do planejamento ao lançamento,{" "}
            <Box as="span" color="#6D9D68">
              sem complicação.
            </Box>
          </Heading>

          <Text
            maxW="650px"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight="1.7"
            color="#657069"
          >
            Um processo organizado para transformar sua ideia em uma presença
            digital profissional, com clareza em cada etapa do projeto.
          </Text>
        </Stack>

        {/* Etapas */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: "16px", md: "18px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <MotionBox
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                position="relative"
              >
                <Box
                  role="group"
                  h="100%"
                  minH={{ base: "280px", md: "310px" }}
                  bg="white"
                  border="1px solid #E3E9E4"
                  borderRadius={{ base: "22px", md: "26px" }}
                  p={{ base: "26px", md: "30px" }}
                  position="relative"
                  overflow="hidden"
                  transition="all 0.25s ease"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 18px 40px rgba(23, 59, 42, 0.08)",
                    borderColor: "#D3DDD5",
                  }}
                >
                  {/* Número */}
                  <Flex
                    justify="space-between"
                    align="flex-start"
                    mb="30px"
                  >
                    <Flex
                      w="46px"
                      h="46px"
                      borderRadius="14px"
                      align="center"
                      justify="center"
                      bg="#EEF4EC"
                      color="#4E794A"
                    >
                      <Icon size={20} />
                    </Flex>

                    <Text
                      fontSize="11px"
                      fontWeight="800"
                      letterSpacing="1.2px"
                      color="#B1BAB4"
                    >
                      {step.number}
                    </Text>
                  </Flex>

                  <Heading
                    as="h3"
                    fontSize={{ base: "21px", md: "23px" }}
                    letterSpacing="-0.6px"
                    color="#173B2A"
                    mb="12px"
                  >
                    {step.title}
                  </Heading>

                  <Text
                    fontSize="13px"
                    lineHeight="1.7"
                    color="#737D76"
                  >
                    {step.description}
                  </Text>

                  {/* Linha decorativa */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    w="100%"
                    h="3px"
                    bg="linear-gradient(90deg, #6D9D68 0%, #A8C99B 100%)"
                    opacity="0"
                    transition="opacity 0.25s ease"
                    _groupHover={{
                      opacity: 1,
                    }}
                  />
                </Box>

                {/* Seta entre as etapas */}
                {index < steps.length - 1 && (
                  <Flex
                    position="absolute"
                    right="-18px"
                    top="50%"
                    transform="translateY(-50%)"
                    w="36px"
                    h="36px"
                    borderRadius="full"
                    bg="white"
                    border="1px solid #DDE5DF"
                    align="center"
                    justify="center"
                    color="#6D9D68"
                    zIndex="2"
                    display={{ base: "none", lg: "flex" }}
                  >
                    <FiArrowRight size={15} />
                  </Flex>
                )}
              </MotionBox>
            );
          })}
        </SimpleGrid>

        {/* Rodapé da seção */}
        <Flex
          mt={{ base: "45px", md: "60px" }}
          pt="25px"
          borderTop="1px solid #E0E7E1"
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="20px"
        >
          <HStack
            gap="10px"
            align="center"
          >
            <Flex
              w="30px"
              h="30px"
              borderRadius="full"
              bg="#EAF2E8"
              color="#4E794A"
              align="center"
              justify="center"
            >
              <FiCheckCircle size={15} />
            </Flex>

            <Text
              fontSize="12px"
              color="#657069"
            >
              Comunicação clara durante todas as etapas.
            </Text>
          </HStack>

          <Text
            fontSize="12px"
            fontWeight="600"
            color="#173B2A"
          >
            Um projeto pensado para o seu negócio.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}