import '@/styles/globals.css'
import '../styles/design_tokens.css'
import '@fortawesome/fontawesome-free/css/all.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
