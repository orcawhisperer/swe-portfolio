import Link from "next/link"
import React from "react"
import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si"

export const Contact = () => {
   const userName = "iamvasanth07"

   const socialLinks = {
      github: "https://github.com/iamvasanth07",
      linkedin: "https://www.linkedin.com/in/iamvasanth07/",
      twitter: "https://twitter.com/iamvasanth07",
      email: "kvasanth373@gmail.com",
   }
   return (
      <section
         id="contact"
         className="py-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
         <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
               CONTACT
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               <Link href={`mailto:${socialLinks.email}`}>
                  <li className="flex items-center shadow-lg p-4 rounded-md bg-white">
                     <span className="contact-icon text-blue-500">
                        <SiGmail color="#DB4437" />
                     </span>
                     <div className="ml-4">
                        <span className="block text-gray-700 font-semibold mb-2">
                           Email
                        </span>
                     </div>
                  </li>
               </Link>
               <Link href={socialLinks.github} target="_blank">
                  <li className="flex items-center shadow-lg p-4 rounded-md bg-white">
                     <span className="contact-icon text-gray-600">
                        <SiGithub color="black" />
                     </span>
                     <div className="ml-4">
                        <span className="block text-gray-700 font-semibold mb-2">
                           GitHub
                        </span>
                     </div>
                  </li>
               </Link>
               <Link href={socialLinks.linkedin} target="_blank">
                  <li className="flex items-center shadow-lg p-4 rounded-md bg-white ">
                     <span className="contact-icon text-blue-600">
                        <SiLinkedin color="#0077B5" />
                     </span>
                     <div className="ml-4 ">
                        <span className="block text-gray-700 font-semibold mb-2">
                           LinkedIn
                        </span>
                     </div>
                  </li>
               </Link>
               <Link href={socialLinks.twitter} target="_blank">
                  <li className="flex items-center shadow-lg p-4 rounded-md bg-white ">
                     <span className="contact-icon text-blue-600">
                        <SiTwitter color="#1DA1F2" />
                     </span>
                     <div className="ml-4 ">
                        <span className="block text-gray-700 font-semibold mb-2">
                           Twitter
                        </span>
                     </div>
                  </li>
               </Link>
            </ul>
         </div>
      </section>
   )
}
