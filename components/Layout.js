import Router from "next/router";
import Header from "./Header";
import nProgress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(url);
  nProgress.start();
};

Router.onRouteChangeComplete = url => nProgress.done();

Router.onRouteChangeError = url => nProgress.done();

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
