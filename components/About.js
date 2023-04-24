import Image from "next/image"
import React from "react"
import Terminal from "./Terminal"

export const About = ({ about }) => {
   return (
      <section
         id="about"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
               ABOUT
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div>
                  <Terminal />
                  <ul className="mt-4 text-white flex flex-wrap gap-4">
                     <li>
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold py-1 px-2 rounded-full uppercase tracking-wide">
                           Cricket
                        </span>
                     </li>
                     <li>
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold py-1 px-2 rounded-full uppercase tracking-wide">
                           Gym
                        </span>
                     </li>
                     <li>
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold py-1 px-2 rounded-full uppercase tracking-wide">
                           Tinkering
                        </span>
                     </li>
                     <li>
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold py-1 px-2 rounded-full uppercase tracking-wide">
                           Travelling
                        </span>
                     </li>
                  </ul>
               </div>
               <div className="max-w-md mx-auto image-container">
                  <Image
                     src="/images/profile.jpg"
                     alt="Vasantha Kumar"
                     className="w-full h-auto shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                     width={500}
                     height={500}
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
