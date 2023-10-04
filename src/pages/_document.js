// pages/_document.js
import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="NextJS Practice Project" />
          <meta property="og:description" content="Custom description for NextJS Practice Project" />
          <meta property="og:image" content="https://picsum.photos/200/300" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
