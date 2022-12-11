import type { AppProps } from 'next/app';
import { requireSvg } from "@/utils/loadSvg";

requireSvg();

import '@/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
 