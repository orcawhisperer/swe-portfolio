import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossorigin
            />
            <link
               as="style"
               rel="preload"
               href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
               rel="preload"
               as="style"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}
