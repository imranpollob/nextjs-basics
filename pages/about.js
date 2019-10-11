import Layout from "./../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About is Here</title>
        <meta
          name="description"
          content="about site for my programming portfolio"
        />
      </Head>

      <Layout title="About">
        <h2>Hudai</h2>
        <p>This is a about page</p>
      </Layout>
    </>
  );
}
