import "../styles/globals.css";
import Head from "next/head";
import Background from "../components/Background";
import Resume from "../components/Resume";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Laura Paccanari</title>
        <link rel="icon" href="assets/images/favicon.ico" />
        {/* <html lang="en" />
        <meta name="description" content="Laura Paccanari's portfolio" /> */}
      </Head>
      <Component {...pageProps} />
      <Background />
      <Resume />
    </>
  );
}

export default App;
