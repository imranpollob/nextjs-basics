import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px;
          display: inline-block;
        }

        a {
          text-decoration: none;
          color: green;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}
