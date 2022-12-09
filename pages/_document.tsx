import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="rtl">
      <Head>
        <title>Wolfland - عالم الخيال والابداع فى الرول بلاى</title>
        <meta
          name="description"
          content="Wolfland - عالم الخيال والابداع فى الرول بلاى"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:image" content="/favicon.png"></meta>
      </Head>
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
