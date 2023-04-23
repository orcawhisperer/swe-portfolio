import Image from "next/image"
import React from "react"

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
                  <p className="text-white text-lg leading-relaxed font-mono-roboto">
                     Experienced software engineer skilled in Programming and
                     Technologies like Python, Go, JavaScript, Web Application
                     Development, DevOps, and Linux. Bachelors in Computer
                     Science Engineering. Interested in working on Revolutionary
                     technologies and solving real-world problems through
                     technology.
                  </p>
                  {/* <ul className="mt-4 text-white">
                     <li>
                        Skills: Python, Go, JavaScript, Web Development, DevOps,
                        Linux
                     </li>
                     <li>Hobbies: Traveling, Hiking, Reading, Cooking</li>
                  </ul> */}
               </div>
               <div className="max-w-md mx-auto image-container">
                  {/* Add an image of yourself here */}
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
