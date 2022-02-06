import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="nextjs, realworld" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="freemanbees" />
          <meta property="og:title" content="freemanbees a bee and honey business" />
          <meta
            property="og:description"
            content="freemanbees a bee and honey business"
          />
          <meta property="og:url" content="https://freemanbees.com/" />
          <meta
            property="og:image"
            //content="https://freemanbees.now.sh/images/share-link.png"
          />
          <meta property="twitter:card" content="next-realworld" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta
            name="msapplication-TileImage"
            content="/images/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="//demo.productionready.io/main.css" />
          <link
            rel="stylesheet"
            href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap"
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

export default MyDocument;