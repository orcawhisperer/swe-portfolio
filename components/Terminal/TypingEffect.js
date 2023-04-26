// TypingEffect.js
import React, { useEffect, useState } from "react"

const TypingEffect = ({ text, typingSpeed, setIsTyping, isTyping }) => {
   const [typedText, setTypedText] = useState("")

   useEffect(() => {
      let index = 0
      const interval = setInterval(() => {
         if (index < text.length - 1) {
            if (text[index]) {
               setTypedText((prevTypedText) => prevTypedText + text[index])
               index++
               setIsTyping(true)
            }
         } else {
            setIsTyping(false)
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

         {isTyping && (
            <span className="bg-green-500 text-sm leading-relaxed font-mono inline-block w-2 h-[1.25rem] cursor-blink" />
         )}
      </span>
   )
}

export default TypingEffect
