import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import "focus-visible/dist/focus-visible";

import { theme } from '../../styles/theme';
import { Layout } from '../components/Layout';

import 'swiper/css';
import 'swiper/css/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
