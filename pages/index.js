import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      <h1>Lets's build facebook together</h1>

      <Header />
    </div>
  );
}
