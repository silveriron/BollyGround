import "../styles/globals.css";
import type { AppProps } from "next/app";
import MuiThemeProvider from "../styles/MuiThemeProvider";
import NavBar from "../components/NavBar/NavBar";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <MuiThemeProvider>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
      </SessionProvider>
    </MuiThemeProvider>
  );
}
