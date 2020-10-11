import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const icon = `${process.env.BACKEND_URL}/icon.png`;
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
          <meta
            name="title"
            content="Getting started with HTML, CSS and JavaScript"
          />
          <link
            rel="icon"
            href="https://oryoffe.github.io/getting-started/icon.png"
          />
          <meta
            property="og:title"
            content="Getting started with HTML, CSS and JavaScript"
          />
          <meta
            property="twitter:title"
            content="Getting started with HTML, CSS and JavaScript"
          ></meta>
          <meta
            property="og:url"
            content="https://oryoffe.github.io/getting-started"
          />
          <meta
            property="al:web:url"
            content="https://oryoffe.github.io/getting-started"
          />
          <meta
            property="og:image"
            content="https://oryoffe.github.io/getting-started/icon.png"
          ></meta>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-179549639-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-179549639-1');
`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JX7WB9');`,
            }}
          />
          <meta
            name="description"
            content="Simple guides to get you started with technology right away. The
            rest you can just search with google."
          ></meta>
          <meta name="theme-color" content="#000000" />
          <meta property="og:image" content={icon} />
          <link rel="apple-touch-icon" href={icon} />

          <link rel="icon" href={icon} type="image/png" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5JX7WB9"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>`,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
