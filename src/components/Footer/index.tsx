import { Flex, Icon, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
      <Flex
        w="100%"
        as="footer"
        align="center"
        justify="center"
        pb="2"
      >
          <Text fontSize="14">
            Feito com
          </Text>
          <Icon
            as={FaHeart}
            h="4"
            mx="2"
            color="yellow.500"
          />
          <Text fontSize="14">
            por Gabriel Ferreira
          </Text>
          <Link href="https://github.com/devgabrielf" passHref>
              <ChakraLink
                ml="2"
                display="flex"
                align="center"
                target="_blank"
                _hover={{
                  color: 'yellow.500'
                }}
              >
                <Icon as={FaGithub} h="5" w="5" />
              </ChakraLink>
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-ferreira5/" passHref>
              <ChakraLink
                ml="2"
                display="flex"
                align="center"
                target="_blank"
                _hover={{
                  color: 'yellow.500'
                }}
              >
                <Icon as={FaLinkedin} h="5" w="5" />
              </ChakraLink>
          </Link>
      </Flex>
    )
}