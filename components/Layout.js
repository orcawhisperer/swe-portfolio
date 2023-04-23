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
