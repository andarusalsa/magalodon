//import '@/styles/globals.css'
import Appshell from "@/components/layout/Appshell";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Appshell withHeaderAndFooter={false}>
      <Component {...pageProps} />
    </Appshell>
  ) ;
  
}
