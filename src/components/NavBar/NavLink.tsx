import { Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string,
  children: string
}

export function NavLink({ href, children }: NavLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;

  if (asPath === href) {
    isActive = true;
  }
  
  return (
    <Link href={href} passHref>
      <ChakraLink
        h={{base: "14", md: "24"}}
        display= "flex"
        flexDirection="column"
        justifyContent="center"
        position="relative"
        _hover={{
          textDecoration: "none",
          "&>p": {
            color: "gray.50"
          },
          _after: {
            content: `""`,
            h: "3px",
            w: "100%",
            bg: "yellow.500",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            position: "absolute",
            bottom: "1px",
            left: "0",
            transform: "scale(1)",
            transition: "0.5s"
          }
        }}
        
        _after={ isActive ? {
          content: `""`,
            h: "3px",
            w: "100%",
            bg: "yellow.500",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            position: "absolute",
            bottom: "1px",
            left: "0",
            transform: "scale(1)",
            transition: "0.5s"
        } : {
          content: `""`,
          h: "3px",
          w: "100%",
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
          position: "absolute",
          bottom: "1px",
          left: "0",
          transform: "scale(0.5)",
          transition: "0.5s"
        }}
      >
        <Text
          fontSize="14"
          fontWeight="medium"
          color={isActive ? "gray.50" : "gray.200"}
          transition="0.5s"
          userSelect="none"
        >
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}