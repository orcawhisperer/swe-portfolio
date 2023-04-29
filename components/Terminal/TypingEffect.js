// TypingEffect.js
import React, { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import styles from "./Terminal.module.css"
import { setIsTyping } from "@/sagas/reducers/terminal.reducer"

const TypingEffect = ({ text, typingSpeed }) => {
   const [typedText, setTypedText] = useState("")
   const [lastTypedIndex, setLastTypedIndex] = useState(-1)
   const startTimeRef = useRef(null)
   const dispatch = useDispatch()

   useEffect(() => {
      // Start the animation loop
      const animationLoop = (time) => {
         // If this is the first frame, record the start time
         if (startTimeRef.current === null) {
            startTimeRef.current = time
            dispatch(setIsTyping(true))
         }

         // Calculate the elapsed time
         const elapsedTime = time - startTimeRef.current

         // Calculate how many characters should be typed by now
         const charactersTyped = Math.floor(elapsedTime / typingSpeed)

         // If new characters have been typed, update the typedText state
         if (charactersTyped > lastTypedIndex) {
            setLastTypedIndex(charactersTyped)
            setTypedText(text.slice(0, charactersTyped))
         }

         // If all characters have been typed, dispatch the setIsTyping action
         if (charactersTyped >= text.length) {
            dispatch(setIsTyping(false))
         }

         // If there are still characters to type, request another animation frame
         if (charactersTyped < text.length) {
            requestAnimationFrame(animationLoop)
         }
      }

      // Start the animation loop
      requestAnimationFrame(animationLoop)

      // Clean up function to reset the state
      return () => {
         setTypedText("")
         setLastTypedIndex(-1)
         startTimeRef.current = null
      }
   }, [text, typingSpeed])

   return (
      <span className="text-green-400 text-sm leading-relaxed font-mono">
         {typedText}

         {typedText.length !== text.length && (
            <span
               className={`bg-green-500 text-sm leading-relaxed font-mono inline-block w-2 h-[1.25rem] ${styles["cursor-blink"]}`}
            />
         )}
      </span>
   )
}

export default TypingEffect
