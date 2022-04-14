import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import { Layout } from "../components";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from "axios";
import Drawer from "@mui/material/Drawer";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  return (
    <>
      <Head>
        <title>Econitre | Silos de maiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="keywords"
          content="silo de maiz, silos de maiz, silos de maiz, silos de maiz ecuador, venta de silos, venta de silos de maiz, venta de silos de maiz ecuador, venta de silos de maiz santo domingo, venta silos de maiz en ecuador, alimento para ganado, alimento para ganado bovino, alimento para vacas"
        />
        <meta name="author" content="Econitre" />
        <meta name="description" content="Econitre | Venta de silos de maiz" />
        <meta property="og:title" content="El mejor silo de maíz de todo el Ecuador" />
        <meta
          property="og:description"
          content="Venta de silos de maiz en Ecuador"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/main-logo.png" />
      </Head>
      <Wrapper apiKey="AIzaSyBlmA951KIojYCPXd_XooXnMs-Uy_7mLdA">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Wrapper>
    </>
  );
}

export default MyApp;
