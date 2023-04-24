import { useRouter } from "next/router"
import React, { useState } from "react"
import TypingEffect from "./TypingEffect"
import TerminalInput from "./TerminalInput"

const Terminal = () => {
   const [inputValue, setInputValue] = useState("")
   const [isTyping, setIsTyping] = useState(false)
   const router = useRouter()

   const processCommand = async (command) => {
      switch (command) {
         case "help":
         case "?":
         case "h":
            console.log("help")
            setInputValue(
               "try: whoami, contact, skills, exp, cert, clear, exit"
            )
            break
         case "clear":
            console.log("clear")
            break
         case "home":
            console.log("home")
            await router.push("/")
         case "whoami":
            await router.push("/#about")
            break
         case "contact":
            console.log("contact")
            await router.push("/#contact")
            break
         case "skills":
            await router.push("/#skills")
            break
         case "exp":
            await router.push("/#work-experience")
            break
         case "cert":
            await router.push("/#certifications")
            break
         case "exit":
            window.close()
            break
         default:
            console.log("Invalid Command")
            setInputValue("Invalid Command!")
      }
   }
   return (
      <div className="terminal bg-black p-6 rounded-md shadow-lg overflow-y-auto flex flex-col h-96">
         <div className="relative flex-grow">
            <span className="text-sm leading-relaxed font-mono">
               <span className="text-red-400">vasanth@command-center</span>
               <span className="text-red-500">:/# </span>
            </span>

            <TypingEffect
               text="Hii, I'm an experienced software engineer skilled in various programming langauges and technologies like Python, Go, gRPC JavaScript, Web Application Development, DevOps, Cloud and Linux. I have Bachelors Degree in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology..."
               typingSpeed={40}
               setIsTyping={setIsTyping}
               isTyping={isTyping}
            />
         </div>
         <div className="mt-auto">
            <div className="mt-auto">
               {!isTyping ? (
                  <TerminalInput
                     value={inputValue}
                     isTyping={isTyping}
                     onChange={(e) => setInputValue(e.target.value)}
                     processCommand={processCommand}
                  />
               ) : null}
            </div>
         </div>
      </div>
   )
}

export default Terminal
