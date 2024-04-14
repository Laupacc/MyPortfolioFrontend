import "../styles/globals.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Background from "../components/Background";
import Resume from "../components/Resume";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <Background />
      <Sidebar />
      <Resume />
    </>
  );
}

export default App;
