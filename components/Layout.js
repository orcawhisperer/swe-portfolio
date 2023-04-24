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
            <meta
               name="description"
               content="Experienced software engineer skilled in Programming and Technologies like Python, Go, JavaScript, Web Application Development, DevOps, and Linux. Bachelors in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology."
            />
            <meta
               name="keywords"
               content="software engineer, programming, python, go, javascript, web development, devops, linux, computer science"
            />
            <meta name="author" content="Vasantha Kumar" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               property="og:title"
               content="Software Engineer Portfolio - Vasantha Kumar"
            />
            <meta
               property="og:description"
               content="Experienced software engineer skilled in Programming and Technologies like Python, Go, JavaScript, Web Application Development, DevOps, and Linux. Bachelors in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology."
            />
            <meta
               property="og:image"
               content="https://www.vasanthakumar.dev/images/profile.jpg"
            />
            <meta property="og:url" content="https://www.vasanthakumar.dev" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
               name="twitter:title"
               content="Software Engineer Portfolio - Vasantha Kumar"
            />
            <meta
               name="twitter:description"
               content="Experienced software engineer skilled in Programming and Technologies like Python, Go, JavaScript, Web Application Development, DevOps, and Linux. Bachelors in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology."
            />
            <meta
               name="twitter:image"
               content="https://www.vasanthakumar.dev/images/profile.jpg"
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
