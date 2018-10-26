import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const timestamp = new Date().valueOf();
    console.log("Document render lai");
    console.log("timestamp", timestamp);
    return (
      <html>
        <Head>
          {/* Import CSS for nprogress */}
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/nprogress.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
