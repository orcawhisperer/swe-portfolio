import React from "react"
import styles from "./Hero.module.css"
import { FaChevronDown } from "react-icons/fa"

const Hero = () => {
   return (
      <section
         id="hero"
         className={`${styles["hero-section"]} text-center pt-16 pb-20 text-white sm:text-base md:text-lg lg:text-xl`}>
         <h1
            className={`sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold font-montserrat animate-fadeIn ${styles["hero-name"]}`}>
            VasanthaKumar A
         </h1>
         <h2
            className={`mt-8 mb-12 sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold font-montserrat animate-fadeIn animation-delay-500 ${styles["hero-title"]}`}>
            Software Engineer · Cloud Architect · Tech Enthusiast
         </h2>
         <a
            href="#about"
            className={`${styles["hero-btn"]} font-montserrat p-2 rounded-md md:text-lg lg:text-xl 
            uppercase animate-fadeIn animation-delay-1000 animate-bounceButton`}>
            Learn More
         </a>
         <div className="mt-6 animate-bounce">
            <FaChevronDown className="text-white w-6 h-6 mx-auto" />
         </div>
      </section>
   )
}

export default Hero
