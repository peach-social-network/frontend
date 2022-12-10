import type { AppProps } from 'next/app';
import { requireSvg } from "@/utils/loadSvg";

requireSvg();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
 