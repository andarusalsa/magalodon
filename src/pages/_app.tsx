import Appshell from "@/components/layout/Appshell";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  ) ;
  
}
