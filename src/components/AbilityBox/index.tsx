import { Box, Text, chakra, UnorderedList, ListItem, Flex } from "@chakra-ui/react";

import Image from "next/image";

type AbilityBoxProps = {
  name: string,
  image: string,
  alt: string,
  knowledges: {
    id: number,
    name: string
  }[]
}

export function AbilityBox({
  name,
  image,
  alt,
  knowledges
}: AbilityBoxProps) {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
  });

  return (
    <Box
      h="405px"
      w="260px"
      position="relative"
      bg="yellow.500"
      transition="0.5s"
      _hover={{
        bg: 'purple.800',
        transform: 'translateY(-10px)'
      }}
    >
      <Box
        bg="gray.900"
        position="absolute"
        boxShadow="-5px -5px 10px 0px #000"
        right="2"
        bottom="2"
      >
        <ChakraImage
          src={image}
          alt={alt}
          height="190px"
          width="260px"
        />
        <Flex
          direction="column"
          h="220px"
          w="260px"
          px="4"
          borderTopRadius="24"
        >
          <Text
            color="gray.100"
            fontFamily="work sans"
            fontSize="14"
            pb="3"
            mb="3"
            borderBottom="1px"
            borderBottomColor="gray.300"
          >
            {name}
          </Text>
          <UnorderedList ml="6">
            {knowledges.map(knowledge => {
              return (
                <ListItem key={knowledge.id}>
                  {knowledge.name}
                </ListItem>
              );
            })}
          </UnorderedList>
        </Flex>
      </Box>
    </Box>
  );
}