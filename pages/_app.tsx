import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
