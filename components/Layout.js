import React from "react"
import Head from "next/head"
import Navbar from "./NavBar"
import { Contact } from "./Contact"

const Layout = ({ children, pageTitle }) => {
   return (
      <>
         <Head>
            <title>{pageTitle}</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossorigin
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
               rel="stylesheet"
            />
         </Head>
         <header>
            <Navbar />
         </header>
         <main className="p-4">{children}</main>
         <footer>
            <Contact />
         </footer>
      </>
   )
}

export default Layout
