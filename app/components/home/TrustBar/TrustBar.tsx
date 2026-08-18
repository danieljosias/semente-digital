"use client";

import { Box, Container, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import {
  FiBarChart2,
  FiCompass,
  FiLayout,
  FiTrendingUp,
} from "react-icons/fi";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const pillars = [
  {
    icon: FiCompass,
    title: "Estratégia",
    description: "Cada projeto começa com um objetivo claro.",
  },
  {
    icon: FiLayout,
    title: "Design",
    description: "Experiências digitais pensadas para valorizar sua marca.",
  },
  {
    icon: FiBarChart2,
    title: "Performance",
    description: "Tecnologia otimizada para velocidade e experiência.",
  },
  {
    icon: FiTrendingUp,
    title: "Conversão",
    description: "Estruturas criadas para transformar visitas em oportunidades.",
  },
];

export function TrustBar() {
  return (
    <Box
      as="section"
      borderTop="1px solid #E7ECE8"
      borderBottom="1px solid #E7ECE8"
      bg="white"
      py={{ base: "35px", md: "42px" }}
    >
      <Container maxW="1200px">
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: "28px", md: "0px" }}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <MotionBox
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                px={{ base: "0px", lg: "28px" }}
                borderRight={{
                  base: "none",
                  lg: index !== pillars.length - 1
                    ? "1px solid #E7ECE8"
                    : "none",
                }}
              >
                <Flex
                  align="flex-start"
                  gap="14px"
                  maxW="260px"
                  mx={{ base: "0", lg: "auto" }}
                >
                  <Flex
                    flexShrink="0"
                    w="40px"
                    h="40px"
                    borderRadius="12px"
                    align="center"
                    justify="center"
                    bg="#EEF4EC"
                    color="#57c9b5"
                  >
                    <Icon size={18} />
                  </Flex>

                  <Box>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="black"
                      mb="4px"
                    >
                      {pillar.title}
                    </Text>

                    <Text
                      fontSize="12px"
                      lineHeight="1.55"
                      color="#737D76"
                    >
                      {pillar.description}
                    </Text>
                  </Box>
                </Flex>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}