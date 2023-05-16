import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const scrollToSection = (e, id) => {
      e.preventDefault()
      const target = document.getElementById(id)
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
   }

   return (
      <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md fixed w-full z-10">
         <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
               <div className="text-2xl font-bold text-white font-montserrat">
                  <Link href="/">HOME</Link>
               </div>
               <div className="hidden md:block">
                  <ul className="flex items-center space-x-4">
                     {[
                        { label: "About", id: "about" },
                        { label: "Experience", id: "work-experience" },
                        { label: "Skills", id: "skills" },
                        { label: "Certifications", id: "certifications" },
                        { label: "Contact", id: "contact" },
                     ].map(({ label, id }) => (
                        <li key={id}>
                           <a
                              href={`#${id}`}
                              onClick={(e) => scrollToSection(e, id)}
                              className="text-white hover:text-blue-200 uppercase font-montserrat">
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="md:hidden">
                  <button onClick={toggleMenu}>
                     {isMenuOpen ? (
                        <FaTimes className="text-white" title="Cancel" />
                     ) : (
                        <FaBars className="text-white" title="Menu" />
                     )}
                  </button>
               </div>
            </div>
            {isMenuOpen && (
               <div className="mt-4 md:hidden">
                  <ul className="flex flex-col space-y-4">
                     {[
                        { label: "About", id: "about" },
                        { label: "Experience", id: "work-experience" },
                        { label: "Skills", id: "skills" },
                        { label: "Certifications", id: "certifications" },
                        { label: "Contact", id: "contact" },
                     ].map(({ label, id }) => (
                        <li key={id}>
                           <a
                              href={`#${id}`}
                              onClick={(e) => scrollToSection(e, id)}
                              className="text-white hover:text-blue-200 uppercase font-montserrat">
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
      </nav>
   )
}

export default Navbar
