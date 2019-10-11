import { useRouter } from "next/router";
import Layout from "./../../components/Layout";
import Head from "next/head";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <Layout>
        <h1>{router.query.id}</h1>
        <p>Oh content</p>
      </Layout>
    </>
  );
}
