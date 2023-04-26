import React from "react"
import styles from "./Hero.module.css"

const Hero = () => {
   return (
      <section
         id="#hero"
         className={`${styles["hero-section"]} text-center pt-16 pb-20 text-white sm:text-base md:text-lg lg:text-xl`}>
         <h1
            className={`${styles["hero-title"]} sm:text-4xl md:text-5xl lg:text-6xl`}>
            VasanthaKumar A
         </h1>
         <h2
            className={`${styles["hero-subtitle"]} mt-8 mb-12 sm:text-lg md:text-xl lg:text-2xl`}>
            Software Engineer · Cloud Architect · Tech Enthusiast
         </h2>
         <div></div>
         <a href="#about" className={`${styles["hero-btn"]}`}>
            Learn More
         </a>
      </section>
   )
}

export default Hero
