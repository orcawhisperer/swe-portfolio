import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md fixed w-full z-10">
         <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
               <div className="text-2xl font-bold text-white font-montserrat">
                  <Link href="/">HOME</Link>
               </div>
               <div className="hidden md:block">
                  <ul className="flex items-center space-x-4">
                     <li>
                        <a
                           href="#about"
                           className="text-white hover:text-blue-20 uppercase font-montserrat">
                           About
                        </a>
                     </li>
                     <li>
                        <a
                           href="#work-experience"
                           className="text-white hover:text-blue-200 uppercase font-montserrat">
                           Experience
                        </a>
                     </li>
                     <li>
                        <a
                           href="#skills"
                           className="text-white hover:text-blue-200 uppercase font-montserrat">
                           Skills
                        </a>
                     </li>
                     <li>
                        <a
                           href="#certifications"
                           className="text-white hover:text-blue-200 uppercase font-montserrat">
                           Certifications
                        </a>
                     </li>
                     <li>
                        <a
                           href="#contact"
                           className="text-white hover:text-blue-200 uppercase font-montserrat">
                           Contact
                        </a>
                     </li>
                     {/* Add more nav items here */}
                  </ul>
               </div>
               <div className="md:hidden flex items-center">
                  <button
                     className="text-white hover:text-blue-200 uppercase focus:outline-none focus:text-blue-200"
                     onClick={() => setIsOpen(!isOpen)}>
                     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                           <path
                              fillRule="evenodd"
                              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414L11.414 12l6.864 4.864z"
                              clipRule="evenodd"
                           />
                        ) : (
                           <path
                              fillRule="evenodd"
                              d="M5.722 7.136a1 1 0 0 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L12.586 12 5.722 7.136z"
                              clipRule="evenodd"
                           />
                        )}
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
