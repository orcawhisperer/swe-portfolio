import Link from "next/link"
import React from "react"
import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si"

export const Contact = () => {
   const userName = "iamvasanth07"

   const socialLinks = {
      github: "https://github.com/iamvasanth07",
      linkedin: "https://www.linkedin.com/in/iamvasanth07/",
      twitter: "https://twitter.com/iamvasanth07",
      email: "mailto:kvasanth373@gmail.com",
   }

   const renderIcon = (key) => {
      switch (key) {
         case "email":
            return <SiGmail color="#DB4437" />
         case "github":
            return <SiGithub color="black" />
         case "linkedin":
            return <SiLinkedin color="#0077B5" />
         case "twitter":
            return <SiTwitter color="#1DA1F2" />
         default:
            return null
      }
   }

   return (
      <section
         id="contact"
         className="py-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
         <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
               CONTACT
            </h2>
            <ul className="flex justify-center items-center space-x-8">
               {Object.entries(socialLinks).map(([key, value], index) => (
                  <Link key={key} href={value} target="_blank">
                     <div className="text-5xl p-3 rounded-full bg-white shadow-md hover:bg-gray-200 transition-transform duration-300 hover:scale-110">
                        {renderIcon(key)}
                     </div>
                  </Link>
               ))}
            </ul>
         </div>
      </section>
   )
}
