import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Jazmin Tattoo</title>
        <link rel="icon" href="/images/logotop.png" />
      </Head>
      <Header />
    </ThemeProvider>
  )
}
