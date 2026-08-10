"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiMonitor,
} from "react-icons/fi";
import { motion } from "motion/react";
import Link from "next/link";

const MotionBox = motion.create(Box);

const projects = [
  {
    title: "Anna Karla Neves Advocacia",
    category: "Site Institucional",
    description:
      "Presença digital profissional para escritório de advocacia, com foco em autoridade, confiança e clareza.",
    url: "https://annakarlanevesadvocacia.com.br/",
    image: "/projects/anna-karla.png",
    featured: true,
  },
  {
    title: "MM Construções",
    category: "Site Institucional",
    description:
      "Site desenvolvido para apresentar serviços e fortalecer a presença digital da empresa.",
    url: "https://mmconstrucoesltda.com.br/",
    image: "/projects/mm-construcoes.png",
    featured: false,
  },
  {
    title: "Agatha Finanças",
    category: "Site Institucional",
    description:
      "Experiência digital criada para transmitir profissionalismo e facilitar o contato com potenciais clientes.",
    url: "https://agathafinancas.com.br/",
    image: "/projects/agatha-financas.png",
    featured: false,
  },
  {
    title: "Dra. Claudiane Oliveira",
    category: "Landing Page",
    description:
      "Landing page estruturada para apresentar a proposta de forma objetiva e direcionar o usuário para a conversão.",
    url: "https://dra.claudianeoliveira.justica-adv.com.br/",
    image: "/projects/claudiane-oliveira.png",
    featured: false,
  },
];

export function Portfolio() {
  return (
    <Box
      as="section"
      id="projetos"
      bg="white"
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
          <Stack gap="18px" maxW="680px">
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
              Projetos
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "34px", md: "48px" }}
              lineHeight="1.08"
              letterSpacing="-2px"
              fontWeight="800"
              color="#173B2A"
            >
              Projetos que transformam ideias em{" "}
              <Box as="span" color="#6D9D68">
                experiências digitais.
              </Box>
            </Heading>

            <Text
              maxW="620px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              color="#657069"
            >
              Cada projeto é pensado para unir posicionamento, experiência,
              design e tecnologia em uma presença digital que represente o
              negócio de verdade.
            </Text>
          </Stack>

            <Link href="#contato">
                <Button
            
                    
                    variant="outline"
                    borderColor="#C9D3CB"
                    color="#173B2A"
                    borderRadius="full"
                    h="48px"
                    px="20px"
                    fontSize="13px"
                    fontWeight="600"
                    gap="8px"
                    flexShrink="0"
                    _hover={{
                    bg: "#F7F9F6",
                    borderColor: "#173B2A",
                    }}
                >
                    Quero meu projeto
                    <FiArrowUpRight />
                </Button>

            </Link>
        </Flex>

        {/* PROJETO EM DESTAQUE */}
        <MotionBox
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          mb="18px"
        >
          <Box
            border="1px solid #E3E9E4"
            borderRadius={{ base: "22px", md: "28px" }}
            overflow="hidden"
            bg="#F7F9F6"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "0 20px 50px rgba(23, 59, 42, 0.09)",
            }}
          >
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              minH={{ lg: "470px" }}
            >
              {/* IMAGEM */}
              <Box
                position="relative"
                minH={{ base: "270px", md: "380px", lg: "470px" }}
                bg="#E8EDE9"
                overflow="hidden"
              >
                <Image 
                src={projects[0].image}
                alt={`Projeto ${projects[0].title}`}
                minH={{ base: "270px", md: "380px", lg: "470px" }}
                />

              
                <Box
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.5s ease"
                  _groupHover={{
                    transform: "scale(1.03)",
                  }}
                />

                {/* Fallback visual */}
                <Flex
                  position="absolute"
                  inset="0"
                  align="center"
                  justify="center"
                  direction="column"
                  gap="12px"
                  bg="#E8EDE9"
                  color="#173B2A"
                  display="none"
                >
                  <FiMonitor size={42} />

                  <Text
                    fontSize="13px"
                    fontWeight="600"
                  >
                    Preview do projeto
                  </Text>
                </Flex>

                <Badge
                  position="absolute"
                  top="20px"
                  left="20px"
                  bg="white"
                  color="#173B2A"
                  borderRadius="full"
                  px="12px"
                  py="7px"
                  fontSize="10px"
                  fontWeight="700"
                  boxShadow="0 5px 15px rgba(0,0,0,0.08)"
                >
                  Projeto em destaque
                </Badge>
              </Box>

              {/* INFORMAÇÕES */}
              <Flex
                direction="column"
                justify="center"
                p={{ base: "28px", md: "42px", lg: "52px" }}
              >
                <Text
                  fontSize="11px"
                  fontWeight="700"
                  letterSpacing="1.4px"
                  textTransform="uppercase"
                  color="#6D9D68"
                  mb="14px"
                >
                  {projects[0].category}
                </Text>

                <Heading
                  as="h3"
                  fontSize={{ base: "28px", md: "36px" }}
                  lineHeight="1.1"
                  letterSpacing="-1.3px"
                  color="#173B2A"
                  mb="16px"
                >
                  {projects[0].title}
                </Heading>

                <Text
                  fontSize={{ base: "14px", md: "15px" }}
                  lineHeight="1.7"
                  color="#69746D"
                  maxW="480px"
                  mb="25px"
                >
                  {projects[0].description}
                </Text>

                <HStack
                  gap="8px"
                  flexWrap="wrap"
                  mb="30px"
                >
                  {[
                    "Design responsivo",
                    "Experiência do usuário",
                    "SEO",
                  ].map((tag) => (
                    <Text
                      key={tag}
                      px="10px"
                      py="6px"
                      borderRadius="full"
                      bg="#EEF4EC"
                      color="#4E794A"
                      fontSize="10px"
                      fontWeight="600"
                    >
                      {tag}
                    </Text>
                  ))}
                </HStack>

                 <Link href={projects[0].url} target="_blank">
                    <Button
                    rel="noopener noreferrer"
                    alignSelf="flex-start"
                    bg="#173B2A"
                    color="white"
                    borderRadius="full"
                    h="48px"
                    px="21px"
                    fontSize="13px"
                    fontWeight="600"
                    gap="8px"
                    _hover={{
                        bg: "#24583F",
                        transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s ease"
                    >
                    Ver projeto
                    <FiExternalLink />
                    </Button>
                 </Link> 
              </Flex>
            </SimpleGrid>
          </Box>
        </MotionBox>

        {/* OUTROS PROJETOS */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="18px"
        >
          {projects.slice(1).map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Box
                h="100%"
                bg="white"
                border="1px solid #E3E9E4"
                borderRadius={{ base: "20px", md: "24px" }}
                overflow="hidden"
                transition="all 0.25s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 18px 40px rgba(23, 59, 42, 0.08)",
                  borderColor: "#D3DDD5",
                }}
              >
                {/* IMAGEM */}
                <Box
                  h={{ base: "220px", md: "190px" }}
                  bg="#E8EDE9"
                  overflow="hidden"
                  
                >
                   <Image src={project.image} alt={`Projeto ${project.title}`} h={{ base: "220px", md: "190px" }}/> 
                  <Box
                   
                    
                    
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.4s ease"
                    _hover={{
                      transform: "scale(1.04)",
                    }}
                  />
                </Box>

                {/* CONTEÚDO */}
                <Stack
                  p={{ base: "22px", md: "25px" }}
                  gap="10px"
                >
                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    letterSpacing="1.2px"
                    textTransform="uppercase"
                    color="#6D9D68"
                  >
                    {project.category}
                  </Text>

                  <Heading
                    as="h3"
                    fontSize="19px"
                    letterSpacing="-0.5px"
                    color="#173B2A"
                  >
                    {project.title}
                  </Heading>

                  <Text
                    fontSize="12px"
                    lineHeight="1.6"
                    color="#737D76"
                  >
                    {project.description}
                  </Text>

                    <Link href={project.url}  target="_blank">
                        <Button
                            rel="noopener noreferrer"
                            alignSelf="flex-start"
                            variant="plain"
                            p="0"
                            mt="5px"
                            h="auto"
                            color="#173B2A"
                            fontSize="12px"
                            fontWeight="700"
                            gap="7px"
                            _hover={{
                            color: "#6D9D68",
                            }}
                        >
                            Ver projeto
                            <FiArrowUpRight />
                        </Button>
                    </Link>
                </Stack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* RODAPÉ DA SEÇÃO */}
        <Flex
          mt="40px"
          pt="25px"
          borderTop="1px solid #E7ECE8"
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="15px"
        >
          <Text
            fontSize="12px"
            color="#7A847D"
          >
            Mais projetos e experiências desenvolvidas pela Semente Digital.
          </Text>


          <Link href="#contato">
            <Button
                
                
                variant="plain"
                p="0"
                h="auto"
                color="#173B2A"
                fontSize="12px"
                fontWeight="700"
                gap="7px"
                _hover={{
                color: "#6D9D68",
                }}
            >
                Vamos criar o seu?
                <FiArrowUpRight />
            </Button>
          
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}