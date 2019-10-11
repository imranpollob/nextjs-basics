import { useRouter } from "next/router";
import Layout from "./../../components/Layout";
import HeadTag from "./../../components/HeadTag";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <HeadTag title={router.query.id} />
      <Layout>
        <h1>{router.query.id}</h1>
        <p>Oh content</p>
      </Layout>
    </>
  );
}
