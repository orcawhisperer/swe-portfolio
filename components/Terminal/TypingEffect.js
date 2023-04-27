// TypingEffect.js
import React, { useEffect, useState } from "react"
import styles from "./Terminal.module.css"
import { useDispatch } from "react-redux"

const TypingEffect = ({ text, typingSpeed, setIsTyping, isTyping }) => {
   const [typedText, setTypedText] = useState("")
   const dispatch = useDispatch()

   useEffect(() => {
      let index = 0
      setTypedText(text[index])
      const interval = setInterval(() => {
         if (index < text.length - 1) {
            setTypedText((prevTypedText) => prevTypedText + text[index])
            index++
            if (!isTyping) {
               dispatch(setIsTyping(true))
            }
         } else {
            dispatch(setIsTyping(false))
            clearInterval(interval)
         }
      }, typingSpeed)

      return () => {
         clearInterval(interval)
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
