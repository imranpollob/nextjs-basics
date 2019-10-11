import Layout from "./../components/Layout";
import HeadTag from "./../components/HeadTag";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const PostLink2 = props => (
  <li>
    <Link href={`/post?id=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <div>
      <HeadTag title="Home" />
      <Layout title="Home">
        <h2>From home</h2>
      </Layout>

      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>

      <ul>
        <PostLink2 title="Hello Next.js" />
        <PostLink2 title="Learn Next.js is awesome" />
        <PostLink2 title="Deploy apps with Zeit" />
      </ul>
    </div>
  );
}
