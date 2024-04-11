import "../styles/globals.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
