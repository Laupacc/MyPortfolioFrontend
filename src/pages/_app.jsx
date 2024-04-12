import "../styles/globals.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import About from "../components/About";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <Sidebar />
    </>
  );
}

export default App;
