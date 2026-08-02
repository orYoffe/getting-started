import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const icon = `${process.env.BACKEND_URL}/brand-mark.svg`;
    return (
      <Html lang={this.props.lang || "en"}>
        <Head>
          <meta name="keywords" content="html, css, javascript" />
          <link rel="author" href="https://medium.com/@Or_yoffe" />
          <meta name="author" content="Or Yoffe" />
          <meta name="robots" content="index,follow,max-image-preview:large" />
          <meta
            property="article:author"
            content="https://medium.com/@Or_yoffe"
          />
          <meta name="theme-color" content="#4f46e5" />
          <meta property="og:site_name" content="Getting Started" />
          <meta property="og:locale" content="en_US" />
          <link rel="icon" href={icon} type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
