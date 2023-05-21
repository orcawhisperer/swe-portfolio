import React, { useEffect, useState } from "react"
import styles from "./Hero.module.css"
import { FaChevronDown } from "react-icons/fa"
import { useSelector } from "react-redux"
import MatrixEffect from "../MatrixEffect/MatrixEffect"
import Hero3 from "../Hero3/Hero3"
import Matrix from "../Hero3/MatrixEffect"
import Matrix3DWorld from "../MatrixWorld/Matrix3DWorld"

const Hero = () => {
   const isPrankRunning = useSelector(
      (state) => state.terminal.terminal.prank.isRunning
   )
   const [scrollPosition, setScrollPosition] = useState(0)

   useEffect(() => {
      const handleScroll = () => {
         const position = window.pageYOffset
         setScrollPosition(position)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })

      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   return (
      <section
         id="hero"
         style={{
            transform: "translate3d(0, 0, 0)",
            backgroundPosition: `center ${scrollPosition}px`,
            height: "35vh",
         }}>
         <Hero3 />
      </section>
   )
}

export default Hero
