import Script from "next/script";
import Posts from "./components/Posts";
import Title from "./components/Title";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-T0NX8C0F66" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T0NX8C0F66');
                  `}
      </Script>
      <Title />
      <article className="m-6">
        <Posts />
      </article>
    </>
  );
}
