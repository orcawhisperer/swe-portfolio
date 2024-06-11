import Image from "next/image"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Terminal from "@/components/Terminal/Terminal"
import styles from "../Terminal/Terminal.module.css"
import { FaTerminal } from "react-icons/fa"
import { setShowTerminal } from "@/sagas/reducers/terminal.reducer"

const About = ({ aboutMeText }) => {
   const dispatch = useDispatch()
   const showTerminal = useSelector(
      (state) => state.terminal.terminal.showTerminal
   )
   const isPrankRunning = useSelector(
      (state) => state.terminal.terminal.prank.isRunning
   )

   const isTyping = useSelector((state) => state.terminal.terminal.isTyping)

   const handleTerminalToggle = () => {
      if (!isPrankRunning && !isTyping) {
         dispatch(setShowTerminal(!showTerminal))
      }
   }

   return (
      <section
         id="about"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <div className="container mx-auto w-full">
            <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
               ABOUT
            </h2>
            <div className="grid md:grid-cols-1 gap-8 items-center">
               <div>
                  {showTerminal ? (
                     <Terminal aboutMeText={aboutMeText} />
                  ) : (
                     <p className="text-md leading-relaxed md:text-xl lg:text-large p-2 font-montserrat italic bold">
                        {
                           "Full-Stack Software Engineer with 5+ years of experience building and deploying scalable web applications using Python, Go, Rust, and JavaScript frameworks. Adept at DevOps practices for seamless CI/CD pipelines and Linux administration. Passionate about tackling real-world challenges through innovative software solutions."
                        }
                     </p>
                  )}

                  <ul className="mt-4 text-white flex flex-wrap gap-4 w-full justify-center">
                     <li className="flex items-center justify-center w-12 rounded-full cursor-pointer">
                        <FaTerminal
                           onClick={() => {
                              handleTerminalToggle()
                           }}
                           size={20}
                           className={`${styles["matrix-effect"]}`}
                        />
                     </li>
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
               {/* <div className="max-w-md mx-auto image-container">
                  <img
                     src="/images/profile.jpg"
                     alt="Vasantha Kumar"
                     className="shadow-lg transition rounded-full w-96 h-96 object-cover object-center hover:scale-110  duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  />
               </div> */}
            </div>
         </div>
      </section>
   )
}

export default About
