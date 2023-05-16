import React from "react"
import styles from "./Hero.module.css"
import { FaChevronDown } from "react-icons/fa"
import { useSelector } from "react-redux"
import MatrixEffect from "../MatrixEffect/MatrixEffect"
import Hero3 from "../Hero3/Hero3"
import Matrix3DWorld from "../MatrixWorld/Matrix3dWorld"

const Hero = () => {
   const isPrankRunning = useSelector(
      (state) => state.terminal.terminal.prank.isRunning
   )

   return (
      <section
         className="w-full"
         style={{
            height: "40vh",
            marginTop: "4vh",
         }}>
         {/* <Hero3 /> */}
         <Matrix3DWorld />
      </section>
   )
}

export default Hero
