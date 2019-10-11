import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <div>
      <Header />

      <h1>{title || "Demo"}</h1>

      {children}

      <style jsx global>{`
        h2 {
          color: red;
        }
      `}</style>
    </div>
  );
}
