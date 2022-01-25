import { useEffect, useRef } from "react";
import { Box, Button, Flex, Icon, Text, Link as ChakraLink, useDisclosure, useBreakpointValue, IconButton } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Mousewheel } from "swiper";

import { FiChevronUp } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import { projects } from "../data/projects";

export default function Projects() {
  const { isOpen, onToggle, onOpen } = useDisclosure();

  const isMediumVersion = useBreakpointValue({
    base: false,
    md: true
  });

  useEffect(() => {
    isMediumVersion && onOpen();
  }, [isMediumVersion, onOpen]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      h="100vh"
      direction="column"
      align="center"
      justify="center"
    >
      <Head>
        <title>Projetos | Gabriel Ferreira</title>
      </Head>
      <Flex
        align="center"
      >
        <IconButton
          h={{base:"8", md: "10"}}
          w={{base:"8", md: "10"}}
          colorScheme=""
          icon={<Icon as={FiArrowLeftCircle} h="100%" w="100%" />}
          aria-label="voltar"
          ref={prevRef}
          mr={{base: "-44px", lg: "4"}}
          zIndex="15"
          color={{base: "gray.50", md: "gray.200"}}
          _hover={{
            color: {base: '', md: 'gray.50'}
          }}
        />
        <Flex
          h={{base: "calc(100vw * (9/16))", md: "450px"}}
          w={{base: "100vw", md: "800px"}}
        >
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            loop={true}
            autoplay={{
              delay: 3000
            }}
            style={{
              width: '100%',
              flex: '1'
            }}
          >
            {projects.map(project => {
              return (
                <SwiperSlide key={project.id}>
                  <Flex
                    h="100%"
                    w="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    textAlign="center"
                    position="relative"
                    className="main-wrapper"
                  >
                    <Swiper
                      direction="vertical"
                      modules={[Scrollbar, A11y, Mousewheel]}
                      slidesPerView={1}
                      mousewheel={{
                        eventsTarget: ".main-wrapper"
                      }}
                      style={{
                        width: '100%',
                        flex: '1'
                      }}
                    >
                      {project.pics.map(pic => {
                        return (
                          <SwiperSlide key={pic.id}>
                            <Flex
                              h="100%"
                              w="100%"
                              align="center"
                              justify="center"
                              direction="column"
                              bgImage={pic.src}
                              bgRepeat="no-repeat"
                              bgSize="cover"
                              bgPosition="center"
                              textAlign="center"
                            >
                              <Box visibility="hidden">-</Box>
                            </Flex>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    <Flex
                      h={{base: "100%", sm: "60%"}}
                      w="100%"
                      bg='rgba(0, 0, 0, 0.6)'
                      direction="column"
                      position="absolute"
                      bottom={isOpen ? "0" : ["calc((100% - 30px) * -1)", "calc((60% - 40px) * -1)"]}
                      transition="0.5s"
                      zIndex="10"
                      backdropFilter="blur(4px)"
                    >
                      <Button 
                        h={["30px", "40px"]}
                        onClick={onToggle}
                        bg="none"
                        colorScheme=""
                      >
                        <Icon
                          h="8"
                          w="8"
                          as={FiChevronUp}
                          transform={isOpen && "rotate(180deg)"}
                          transition="0.5s"
                        />
                      </Button>
                      <Flex
                        flex="1"
                        px="12"
                        pb={["2", "4", "6"]}
                        direction="column"
                        justify="space-between"
                        overflowY="scroll"
                        css={{
                          "&::-webkit-scrollbar": {
                            display: 'none'
                          }
                        }}
                      >
                        <Text
                          fontSize={["12", "14", "16"]}
                          align="justify"
                          mb="4"
                        >
                          {project.description}
                        </Text>
                        <Flex
                          direction="column"
                        >
                          <Text
                            fontSize={["12", "14", "16"]}
                            align="start"
                          >
                            Tecnologias utilizadas: {project.technologies}
                          </Text>
                          <Text
                            fontSize={["12", "14", "16"]}
                            align="start"
                          >
                            Repositório do GitHub:{' '}
                            <Link
                              href={project.repository}
                              passHref >
                              <ChakraLink target="_blank">{project.repository}</ChakraLink>
                            </Link>
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex>
        <IconButton
          h={{base:"8", md: "10"}}
          w={{base:"8", md: "10"}}
          colorScheme=""
          icon={<Icon as={FiArrowRightCircle} h="100%" w="100%" />}
          aria-label="avançar"
          ref={nextRef}
          ml={{base: "-44px", lg: "4"}}
          zIndex="15"
          color={{base: "gray.50", md: "gray.200"}}
          _hover={{
            color: {base: '', md: 'gray.50'}
          }}
        />
      </Flex>
    </Flex>
  )
}