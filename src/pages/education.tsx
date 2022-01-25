import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { EducationBox } from "../components/EducationBox";

import { courses } from "../data/courses";

export default function Education() {
  return (
    <Flex
      h={{md: "100%"}}
      w="100%"
      direction="column"
      align="center"
      justify="center"
      py={{base: "8", md: "0"}}
    >
      <Head>
        <title>Formação | Gabriel Ferreira</title>
      </Head>
      {courses.map(course => {
        return(
          <EducationBox
            key={course.id}
            {...course}
          />
        );
      })}
    </Flex>
  )
}
