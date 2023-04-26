import React from "react"
import styles from "./Hero.module.css"

const Hero = () => {
   return (
      <section
         id="#hero"
         className={`${styles["hero-section"]} text-center pt-16 pb-20 text-white sm:text-base md:text-lg lg:text-xl`}>
         <h1
            className={`sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold font-montserrat`}>
            VasanthaKumar A
         </h1>
         <h2
            className={`mt-8 mb-12 sm:text-lg md:text-xl lg:text-2xl uppercase font-montserrat`}>
            Software Engineer · Cloud Architect · Tech Enthusiast
         </h2>
         <a
            href="#about"
            className={`${styles["hero-btn"]} font-montserrat p-2 rounded-md md:text-lg lg:text-xl 
            uppercase`}>
            Learn More
         </a>
      </section>
   )
}

export default Hero
