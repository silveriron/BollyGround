import "../styles/globals.css";
import type { AppProps } from "next/app";
import MuiThemeProvider from "../styles/MuiThemeProvider";
import NavBar from "../components/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}
