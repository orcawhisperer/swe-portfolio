// customCursor.js
import React, { useEffect, useRef, useState } from "react"
import styles from "./CustomCursor.module.css" // Import the CSS file

export const CustomCursor = () => {
   const cursorRef = useRef(null)
   const [clickAnimation, setClickAnimation] = useState(false)

   useEffect(() => {
      const cursor = cursorRef.current

      if (!cursor) return

      const onMouseMove = (e) => {
         cursor.style.top = `${e.pageY}px`
         cursor.style.left = `${e.pageX}px`
      }

      const onClick = () => {
         setClickAnimation(true)
         setTimeout(() => setClickAnimation(false), 300)
      }

      window.addEventListener("mousemove", onMouseMove)
      window.addEventListener("click", onClick)

      return () => {
         window.removeEventListener("mousemove", onMouseMove)
         window.removeEventListener("click", onClick)
      }
   }, [])

   return (
      <div
         ref={cursorRef}
         className={`${styles.customCursor}${
            clickAnimation ? " click-animation" : ""
         }`}></div>
   )
}
