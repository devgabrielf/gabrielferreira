import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";

import GabrielImg from "../assets/images/gabrielpicture.png";

export default function Home() {
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
        <title>Gabriel Ferreira</title>
      </Head>
      <Flex
        w="100%"
        maxW="1000"
        direction="column"
        align="center"
        px={{base: "8", sm: "12"}}
        py={{base: "16", md: "0"}}
      >
        <Text
            fontFamily="Anton"
            fontSize="38"
            mb="2"
          >
            GABRIEL FERREIRA
          </Text>
        <Flex
          direction={["column", "row"]}
          align="center"
          mb="8"
        >
          <Text
            fontFamily="Anton"
            fontSize="28"
          >
            DESENVOLVEDOR
          </Text>
          <Text
            fontFamily="Anton"
            fontSize="28"
            color="yellow.500"
            ml="2"
          >
              FRONT-END
          </Text>
        </Flex>
        <Flex
          direction={{base: "column", md: "row"}}
          align="center"
        >
          <Box
            h={["60", "72"]}
            w={["60", "72"]}
            minW={["60", "72"]}
            mr={{md: "12", lg: "20"}}
            mb={{base: "12", md: "0"}}
            border="4px"
            borderColor="yellow.500"
            padding="6px"
            borderRadius="50%"
            transition="0.5s"
          >
            <ChakraImage
              src={GabrielImg}
              alt="Gabriel Ferreira"
              borderRadius="50%"
            />
          </Box>
          <Text
            align="justify"
          >
            Olá! Me chamo Gabriel Ferreira, tenho 19 anos e moro em Betim/MG.
            Sou apaixonado por tecnologia, programação e matemática. Meu primeiro
            contato com desenvolvimento de software foi durante o primeiro ano do
            curso técnico em Automação Industrial, quando aprendi o básico de lógica
            de programação. Após o fim do curso, entrei na graduação em TI e
            comecei a apronfudar meus estudos na programação. Hoje, me dedico ao
            desenvolvimento front-end com React. 
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
