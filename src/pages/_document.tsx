import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* You can add custom meta tags, links, etc., here */}</Head>
        <body>
          <Main /> <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
