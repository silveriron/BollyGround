import "../styles/globals.css";
import type { AppProps } from "next/app";
import MuiThemeProvider from "../styles/MuiThemeProvider";
import NavBar from "../components/NavBar/NavBar";
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 30,
    }
  }
});

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <MuiThemeProvider>
      <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </SessionProvider>
      </QueryClientProvider>
    </MuiThemeProvider>
  );
}
