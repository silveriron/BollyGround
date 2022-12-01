import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MuiThemeProvider from '../styles/MuiThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return <MuiThemeProvider><Component {...pageProps} /></MuiThemeProvider>
}
