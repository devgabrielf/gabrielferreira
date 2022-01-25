import { Box, Button, Flex, Stack, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "../services/api";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";
import { TextArea } from "../components/Form/TextArea";

import { FiChevronsRight } from "react-icons/fi";
import { RiMailFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";

import { toastSuccess, toastError } from "../utils/toasts";
import { Toaster } from "react-hot-toast";

type SendMessageFormData = {
  name: string;
  email: string;
  message: string
}

const sendMessageFormSchema = yup.object().shape({
  name: yup.string()
            .required('Nome obrigatório'),
  email: yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
  message: yup.string()
               .required('Mensagem obrigatória')
});

export default function Contact() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(sendMessageFormSchema),
    shouldFocusError: false
  });

  const handleSendMessage: SubmitHandler<SendMessageFormData> = async (data) => {
    await api.post("/api/form", data, {
      timeout: 60000
    }).then(() => {
      toastSuccess("Mensagem enviada!");
      reset();
    }).catch((error) => {
      console.log(error);
      toastError("Algo deu errado.");
    });
  }

  return (
    <Flex
      h={{md: "100%"}}
      w="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <Head>
        <title>Contato | Gabriel Ferreira</title>
      </Head>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Flex
        as="form"
        w="100%"
        maxW="800"
        p="8"
        borderRadius={8}
        direction="column"
        align="stretch"
        onSubmit={handleSubmit(handleSendMessage)}
      >
        <Flex
          direction={{base: "column", sm: "row"}}
          align="center"
          justify="space-between"
          mt={{base: "20", md: "0"}}
          mb={{base: "6", md: "12"}}
        >
          <Flex
            align="center"
            alignSelf="flex-start"
          >
            <Icon
              as={FiChevronsRight}
              h="8"
              w="8"
              color="yellow.500"
              mr="2"
            />
            <Text
              fontSize="28"
              fontWeight="bold"
            >
              FALE COMIGO
            </Text>
          </Flex>
          <Stack
            direction={{base: "column", md: "row"}}
            spacing={{base: "2", md: "8"}}
            fontSize="14"
            color="gray.100"
            position={{base: "absolute", md: "static"}}
            right="4"
            top="6"
            align="flex-end"
          >
            <Link href="mailto:gabriel.ferreira5584@gmail.com" passHref>
              <ChakraLink
                target="_blank"
                _hover={{
                  textDecoration: 'none',
                  color: 'yellow.500'
                }}
              >
                <Flex align="center">
                  <Icon
                    as={RiMailFill}
                    h="4"
                    w="4"
                    mr="2"
                    color="yellow.500"
                  />
                  <Text>gabriel.ferreira5584@gmail.com</Text>
                </Flex>
              </ChakraLink>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5531982356520" passHref>
                <ChakraLink
                  target="_blank"
                  _hover={{
                    textDecoration: 'none',
                    color: 'yellow.500'
                  }}
                >
                  <Flex align="center">
                    <Icon
                      as={RiPhoneFill}
                      h="4"
                      w="4"
                      mr="2"
                      color="yellow.500"
                    />
                    <Text>+55 (31) 98235-6520</Text>
                  </Flex>
                </ChakraLink>
            </Link>
          </Stack>
        </Flex>
        <Flex
          direction="column"
        >
          <Stack
            spacing="8"
            direction={{base: "column", md: "row"}}
          >
            <Input
              name="name"
              label="Nome"
              placeholder="Nome"
              error={formState.errors.name}
              {...register('name')}
            />
            <Input
              name="email"
              type="email"
              label="E-mail"
              placeholder="E-mail"
              error={formState.errors.email}
              {...register('email')}
            />
          </Stack>
          <Box
            mt="8"
          >
            <TextArea
              name="message"
              label="Mensagem"
              placeholder="Deixe aqui sua mensagem..."
              error={formState.errors.message}
              {...register('message')}
              h="180px"
            />
          </Box>
        </Flex>
        <Button
          type="submit"
          mt="10"
          borderRadius="0"
          colorScheme=""
          bg="yellow.500"
          color="black"
          _hover={{
            bg: "purple.800",
            color: "gray.50"
          }}
          _active={{
            bg: "purple.900",
            color: "gray.50"
          }}
          size="md"
          isLoading={formState.isSubmitting}
          _loading={{
            bg: 'purple.500',
            color: 'gray.50',
            cursor: 'default'
          }}
        >
          ENVIAR
        </Button>
      </Flex>
    </Flex>
  )
}
