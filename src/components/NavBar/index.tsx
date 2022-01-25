import { Flex, Stack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, IconButton, Icon, Link as ChakraLink, useDisclosure } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { NavLinks } from "./NavLinks";

import LogoImg from "../../assets/images/logo.png";

import { FaBars } from "react-icons/fa";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
        setMounted(true)
    }, []);

  const router = useRouter();

  const isMediumVersion = useBreakpointValue({
    base: false,
    md: true
  });

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return mounted && isMediumVersion ? (
    <Flex
      as="header"
      h="24"
      w="100%"
      px="6"
      borderBottom="1px"
      borderColor="gray.700"
      align="center"
      justify="center"
    >
      <Stack
        spacing="12"
        direction="row"
        align="center"
        justify="center"
      >
        <NavLinks />
      </Stack>
    </Flex>
  ) : (
    <Flex
      position="absolute"
      left="2"
      top="4"
      zIndex="10"
    >
      <IconButton
        aria-label="Abrir navegação"
        icon={<Icon as={FaBars} mt="2" />}
        alignContent="center"
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        >
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>Navegação</DrawerHeader>
              <DrawerBody>
              <Stack
                direction="column"
              >
                <NavLinks />
              </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
    </Flex>
  );
}