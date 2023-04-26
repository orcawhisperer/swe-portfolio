// TypingEffect.js
import React, { useEffect, useState } from "react"
import styles from "./Terminal.module.css"

const TypingEffect = ({
   text,
   typingSpeed,
   setIsTyping,
   setShowTerminalInput,
}) => {
   const [typedText, setTypedText] = useState("")

   useEffect(() => {
      let index = 0
      setTypedText(text[index])
      const interval = setInterval(() => {
         if (index < text.length - 1) {
            setTypedText((prevTypedText) => prevTypedText + text[index])
            index++
            setIsTyping(true)
         } else {
            setIsTyping(false)
            setShowTerminalInput(true)
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
