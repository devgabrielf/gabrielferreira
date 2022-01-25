import { Flex, chakra, Stack } from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";

import { AbilityBox } from "../components/AbilityBox";

import { abilities } from "../data/abilities";

export default function Abilities() {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
  });

  return (
    <Flex
      h={{md: "100%"}}
      direction="column"
      align="center"
      justify="center"
    >
      <Head>
        <title>Habilidades | Gabriel Ferreira</title>
      </Head>
      <Stack 
        spacing={{base: "16", md: "28"}}
        direction={{base: "column", md: "row"}}
        py="10"
        mt={{base: "12", md: "0"}}
      >
        {abilities.map(ability => {
          return (
            <AbilityBox
              key={ability.id}
              {...ability}
            />
          );
        })}
      </Stack>
    </Flex>
  )
}
