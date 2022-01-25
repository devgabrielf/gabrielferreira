import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactElement }) {
  return (
    <Flex
      h="100vh"
      direction="column"
      align="center"
    >
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
}