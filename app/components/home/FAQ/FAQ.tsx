"use client";

import { useState } from "react";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FiArrowUpRight, FiMinus, FiPlus } from "react-icons/fi";

import { motion, AnimatePresence } from "motion/react";

const MotionBox = motion.create(Box);

const faqItems = [
  {
    question: "Que tipo de site a Semente Digital cria?",
    answer:
      "Criamos sites institucionais, landing pages, páginas de vendas e outras soluções digitais personalizadas de acordo com o objetivo de cada negócio. O projeto é desenvolvido pensando na identidade, público e necessidades específicas da empresa.",
  },
  {
    question: "O site é personalizado ou vocês trabalham com modelos prontos?",
    answer:
      "Nosso objetivo é criar uma solução que faça sentido para cada cliente. Podemos utilizar referências e estruturas que funcionam bem, mas adaptamos o projeto à identidade visual, conteúdo, público e objetivos do negócio.",
  },
  {
    question: "Quanto tempo leva para criar um site ou landing page?",
    answer:
      "O prazo depende do tamanho e da complexidade do projeto, além da disponibilidade dos conteúdos e materiais necessários. Antes de iniciar, definimos um prazo claro para que o cliente saiba exatamente o que esperar.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Todos os projetos são desenvolvidos pensando em diferentes tamanhos de tela, incluindo computadores, tablets e smartphones. A experiência mobile é considerada desde o desenvolvimento.",
  },
  {
    question: "Preciso fornecer os textos e imagens?",
    answer:
      "Podemos trabalhar com os materiais fornecidos pelo cliente e também orientar sobre a organização do conteúdo. Dependendo do projeto e do escopo contratado, podemos auxiliar na estruturação e adaptação dos textos e elementos visuais.",
  },
  {
    question: "Depois que o site estiver pronto, posso fazer alterações?",
    answer:
      "Sim. A estrutura do projeto é pensada para permitir futuras alterações e evoluções. Também podemos oferecer serviços de manutenção e suporte após a entrega, conforme a necessidade do cliente.",
  },
  {
    question: "Vocês também fazem manutenção de sites?",
    answer:
      "Sim. Podemos continuar cuidando do projeto depois da entrega, realizando atualizações, ajustes, melhorias e manutenção conforme a necessidade do negócio.",
  },
  {
    question: "Vocês cuidam da hospedagem e do domínio?",
    answer:
      "Podemos orientar o cliente na contratação e configuração de domínio e hospedagem, além de realizar a publicação do projeto quando isso fizer parte do escopo contratado.",
  },
  {
    question: "Como funciona o processo para começar meu projeto?",
    answer:
      "O primeiro passo é conversar sobre o seu negócio, entender o que você precisa e definir os objetivos do projeto. Depois alinhamos o escopo, prazo e investimento. Com tudo aprovado, iniciamos o desenvolvimento.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Box
      as="section"
      id="faq"
      bg="white"
      py={{ base: "80px", md: "120px" }}
    >
      <Container maxW="1050px">
        {/* CABEÇALHO */}
        <Stack
          gap="18px"
          align="center"
          textAlign="center"
          mb={{ base: "45px", md: "60px" }}
        >
          <Badge
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
            Perguntas frequentes
          </Badge>

          <Heading
            as="h2"
            maxW="720px"
            fontSize={{ base: "34px", md: "48px" }}
            lineHeight="1.08"
            letterSpacing="-2px"
            fontWeight="800"
            color="#173B2A"
          >
            Antes de começar,{" "}
            <Box as="span" color="#6D9D68">
              tire suas dúvidas.
            </Box>
          </Heading>

          <Text
            maxW="620px"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight="1.7"
            color="#657069"
          >
            Reunimos as principais dúvidas que recebemos de empresas e
            profissionais antes de iniciar um projeto com a Semente Digital.
          </Text>
        </Stack>

        {/* FAQ */}
        <Stack gap="12px">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <MotionBox
                key={item.question}
                border="1px solid"
                borderColor={isOpen ? "#C9D9CB" : "#E5EAE6"}
                borderRadius="18px"
                bg={isOpen ? "#F8FAF8" : "white"}
                overflow="hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
              >
                {/* PERGUNTA */}
                <Button type="button" width="100%">
                    <Box
                    width="100%"
                    border="none"
                    bg="transparent"
                    cursor="pointer"
                    textAlign="left"
                    px={{ base: "20px", md: "28px" }}
                    py={{ base: "20px", md: "23px" }}
                    onClick={() => toggleItem(index)}
                    _hover={{
                        bg: "transparant",
                    }}
                    >
                    <Flex
                        align="center"
                        justify="space-between"
                        gap="20px"
                    >
                        <Text
                        fontSize={{ base: "14px", md: "15px" }}
                        fontWeight="700"
                        lineHeight="1.5"
                        color="white"
                        >
                        {item.question}
                        </Text>

                        <Flex
                        flexShrink="0"
                        w="34px"
                        h="34px"
                        borderRadius="full"
                        bg={isOpen ? "#173B2A" : "black"}
                        color={isOpen ? "white" : "#6D9D68"}
                        align="center"
                        justify="center"
                        transition="all 0.2s ease"
                        >
                        {isOpen ? (
                            <FiMinus size={15} />
                        ) : (
                            <FiPlus size={15} />
                        )}
                        </Flex>
                    </Flex>
                    </Box>
                </Button>

                {/* RESPOSTA */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <MotionBox
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      overflow="hidden"
                    >
                      <Box
                        px={{ base: "20px", md: "28px" }}
                        pb={{ base: "22px", md: "25px" }}
                        pr={{ base: "55px", md: "75px" }}
                      >
                        <Text
                          fontSize={{ base: "13px", md: "14px" }}
                          lineHeight="1.75"
                          color="#657069"
                        >
                          {item.answer}
                        </Text>
                      </Box>
                    </MotionBox>
                  )}
                </AnimatePresence>
              </MotionBox>
            );
          })}
        </Stack>

        {/* CTA DA FAQ */}
        <Flex
          mt={{ base: "40px", md: "55px" }}
          p={{ base: "24px", md: "30px" }}
          borderRadius="20px"
          bg="#F2F6F2"
          border="1px solid #E0E9E1"
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap="20px"
        >
          <Stack gap="5px">
            <Text
              fontSize={{ base: "15px", md: "17px" }}
              fontWeight="700"
              color="#173B2A"
            >
              Ainda ficou com alguma dúvida?
            </Text>

            <Text
              fontSize="12px"
              lineHeight="1.6"
              color="#657069"
            >
              Fale com a gente e conte o que você precisa.
            </Text>
          </Stack>

          <Link href="https://wa.me/5521996675487" target="_blank" rel="noopener noreferrer"> 
            <Flex
                
                align="center"
                justify="center"
                gap="8px"
                px="20px"
                h="44px"
                borderRadius="full"
                bg="#173B2A"
                color="white"
                fontSize="12px"
                fontWeight="700"
                textDecoration="none"
                flexShrink="0"
                transition="all 0.2s ease"
                _hover={{
                bg: "#24543D",
                transform: "translateY(-2px)",
                }}
            >
                Falar com a Semente
                <FiArrowUpRight size={15} />
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}