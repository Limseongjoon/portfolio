import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "flowbite";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="../path/to/flowbite/dist/flowbite.min.js" />
      </body>
    </Html>
  );
}
