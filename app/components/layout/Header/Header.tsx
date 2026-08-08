"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navigation = [
  {
    label: "Soluções",
    href: "#solucoes",
  },
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Como funciona",
    href: "#processo",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="all 0.3s ease"
      bg={isScrolled ? "rgba(255, 255, 255, 0.94)" : "transparent"}
      backdropFilter={isScrolled ? "blur(14px)" : "none"}
      boxShadow={isScrolled ? "0 4px 24px rgba(0, 0, 0, 0.06)" : "none"}
      borderBottom={
        isScrolled ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid transparent"
      }
    >
      <Container maxW="1200px">
        <Flex
          h={{ base: "72px", md: "82px" }}
          align="center"
          justify="space-between"
        >
          {/* LOGO */}
          <Link
            href="/"
            _hover={{ textDecoration: "none" }}
            aria-label="Semente Digital - Página inicial"
          >
            <HStack gap="10px">
              {/* Símbolo */}
              <Flex
                w="42px"
                h="42px"
                borderRadius="14px"
                align="center"
                justify="center"
                bg="#173B2A"
                color="white"
                fontSize="20px"
                fontWeight="700"
                position="relative"
                overflow="hidden"
              >
                <Text
                  fontFamily="Georgia, serif"
                  fontSize="23px"
                  lineHeight="1"
                >
                  S
                </Text>

                <Box
                  position="absolute"
                  w="7px"
                  h="7px"
                  borderRadius="full"
                  bg="#A8C99B"
                  top="7px"
                  right="7px"
                />
              </Flex>

              {/* Nome */}
              <Box lineHeight="1">
                <Text
                  fontSize="17px"
                  fontWeight="800"
                  letterSpacing="-0.5px"
                  color={isScrolled ? "#173B2A" : "#173B2A"}
                >
                  SEMENTE
                </Text>

                <Text
                  mt="3px"
                  fontSize="10px"
                  fontWeight="600"
                  letterSpacing="2.5px"
                  color="#6B756F"
                >
                  DIGITAL
                </Text>
              </Box>
            </HStack>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <HStack
            display={{ base: "none", lg: "flex" }}
            gap="34px"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                fontSize="14px"
                fontWeight="500"
                color="#303833"
                position="relative"
                transition="color 0.2s ease"
                _hover={{
                  color: "#173B2A",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* DESKTOP CTA */}
          <Link href="/contato">
            <Button
                
                
                display={{ base: "none", lg: "flex" }}
                bg="#173B2A"
                color="white"
                borderRadius="full"
                px="22px"
                h="46px"
                fontSize="13px"
                fontWeight="600"
                gap="8px"
                transition="all 0.25s ease"
                _hover={{
                bg: "#24583F",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(23, 59, 42, 0.18)",
                }}
            >
                Falar com especialista
                <FiArrowUpRight />
            </Button>

          </Link>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            display={{ base: "flex", lg: "none" }}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            color="#173B2A"
            fontSize="23px"
            _hover={{
              bg: "rgba(23, 59, 42, 0.08)",
            }}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </IconButton>
        </Flex>
      </Container>

      {/* MOBILE NAVIGATION */}
      {isMenuOpen && (
        <Box
          display={{ base: "block", lg: "none" }}
          bg="white"
          borderTop="1px solid rgba(0, 0, 0, 0.06)"
          boxShadow="0 12px 30px rgba(0, 0, 0, 0.08)"
        >
          <Container maxW="1200px">
            <Stack gap="0" py="12px">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  py="15px"
                  fontSize="15px"
                  fontWeight="500"
                  color="#303833"
                  borderBottom="1px solid #EDF0EE"
                  onClick={closeMenu}
                  _hover={{
                    color: "#173B2A",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
                <Link href="/contato" >
                    <Button
                        
                        mt="14px"
                        mb="6px"
                        w="100%"
                        h="48px"
                        bg="#173B2A"
                        color="white"
                        borderRadius="full"
                        fontSize="14px"
                        fontWeight="600"
                        _hover={{
                        bg: "#24583F",
                        }}
                        onClick={closeMenu}
                    >
                        Falar com especialista
                        <FiArrowUpRight />
                    </Button>
                </Link>
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
}