import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

type EducationBoxProps = {
  course: string,
  institution: string,
  logo: string,
  startDate: string,
  endDate?: string
}

export function EducationBox({
  course,
  institution,
  logo,
  startDate,
  endDate = "cursando"
}: EducationBoxProps) {
  const isBaseVersion = useBreakpointValue({
    base: true,
    small: true
  });

  return (
    <Flex
      direction={{base: "column", md: "row"}}
      w={{base: "100%", sm: "calc(min(720px, 90%))"}}
      bg={{sm: "gray.800"}}
      px={{base:"2", md: "8"}}
      py={{sm: "8"}}
      borderRadius={{sm: "32"}}
      boxShadow={{sm: "0px 5px 15px 0px rgba(0,0,0,0.8)"}}
      align="center"
      transition="0.5s"
      _first={{
        mt: {base: "6", md: "0"}
      }}
      _notFirst={{
        mt: "8"
      }}
      _hover={{
        transform: {md: "scale(1.02)"}
      }}
    >
      <Image
        height={`${isBaseVersion ? "100px" : "150px"}`}
        width={"150px"}
        src={logo}
        alt="Logo da instituição"
      />
      <Flex
        direction="column"
        px={{base: "6", md: "0"}}
        mt={{base: "4", sm: "0"}}
        ml={{md: "8"}}
        align={{base: "center", md: "start"}}
      >
        <Text
          as="h2"
          fontSize={{sm: "20"}}
          fontWeight="bold"
          borderRadius="full"
          textAlign={{base: "center", md: "start"}}
        >
          {course}
        </Text>
        <Text
          fontSize={{base: "14", sm: "16"}}
          textAlign={{base: "center", md: "start"}}
          mb={{base: "4", sm: "10"}}
        >
          {institution}
        </Text>
        <Text
          fontSize="14"
          color="gray.200"
        >
          {startDate} - {endDate}
        </Text>
      </Flex>
    </Flex>
  );
}