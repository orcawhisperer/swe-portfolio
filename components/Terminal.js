import { useRouter } from "next/router"
import React, { useState } from "react"
import TypingEffect from "./TypingEffect"
import TerminalInput from "./TerminalInput"

const Terminal = () => {
   const [inputValue, setInputValue] = useState("")
   const [isTyping, setIsTyping] = useState(false)
   const [outputMessages, setOutputMessages] = useState([])
   const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1)
   const [isClosing, setIsClosing] = useState(false)
   const router = useRouter()

   const processCommand = async (command) => {
      let output = ""
      let switchCmd = command.toLowerCase()
      switch (switchCmd) {
         case "help":
         case "?":
         case "h":
            output = "try: whoami, contact, skills, exp, cert, clear, exit"
            break
         case "hi":
         case "hello":
            output = "Hello there!"
         case "clear":
            setOutputMessages([])
            break
         case "home":
            output = "redirecting to home section..."
            await router.push("/")
         case "whoami":
            output = "redirecting to about section..."
            await router.push("/#about")
            break
         case "contact":
            output = "redirecting to contact section..."
            await router.push("/#contact")
            break
         case "skills":
            output = "redirecting to skills section..."
            await router.push("/#skills")
            break
         case "exp":
            output = "redirecting to work experience section..."
            await router.push("/#work-experience")
            break
         case "cert":
            output = "redirecting to certifications section..."
            await router.push("/#certifications")
            break
         case "exit":
            setTimeout(() => {
               setOutputMessages([
                  ...outputMessages,
                  { input: command, output: "Closing terminal... Bye!" },
               ])
            }, 1000)
            setTimeout(() => {
               setOutputMessages([])
               setIsClosing(true)
               window.close()
            }, 2000)

            break
         default:
            output = "Invalid Command!"
            setInputValue("Invalid Command!")
      }
      if (output) {
         setOutputMessages([...outputMessages, { input: command, output }])
      }
      setInputValue("")
   }

   const renderTerminalOutput = () => {
      return outputMessages.map((messageObj, index) => (
         <div key={index}>
            <div className="text-sm leading-relaxed font-mono">
               <span className="text-yellow-400">guest@command-center</span>
               <span className="text-yellow-500">:-$ </span>
               <span className="text-white">{messageObj.input}</span>
            </div>
            <div className="text-sm leading-relaxed font-mono">
               <span className="text-white">{messageObj.output}</span>
            </div>
         </div>
      ))
   }

   const handleUpArrow = () => {
      if (commandHistoryIndex < outputMessages.length - 1) {
         setCommandHistoryIndex(commandHistoryIndex + 1)
         setInputValue(
            outputMessages[outputMessages.length - commandHistoryIndex - 2]
               .input
         )
      }
   }

   const handleDownArrow = () => {
      if (commandHistoryIndex > 0) {
         setCommandHistoryIndex(commandHistoryIndex - 1)
         setInputValue(
            outputMessages[outputMessages.length - commandHistoryIndex].input
         )
      } else if (commandHistoryIndex === 0) {
         setCommandHistoryIndex(-1)
         setInputValue("")
      }
   }

   return (
      <div>
         {!isClosing ? (
            <div
               className={`terminal bg-black p-6 rounded-md shadow-lg overflow-y-auto flex flex-col h-96 ${
                  isClosing ? "terminal-closing" : ""
               }`}>
               <div className="relative flex-grow">
                  <span className="text-sm leading-relaxed font-mono">
                     <span className="text-red-400">
                        vasanth@command-center
                     </span>
                     <span className="text-red-500">:/# </span>
                  </span>

                  <TypingEffect
                     text="Hii, I'm an experienced software engineer skilled in various programming langauges and technologies like Python, Go, gRPC JavaScript, Web Application Development, DevOps, Cloud and Linux. I have Bachelors Degree in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology..."
                     typingSpeed={40}
                     setIsTyping={setIsTyping}
                     isTyping={isTyping}
                  />
                  {renderTerminalOutput()}
                  {!isTyping && (
                     <TerminalInput
                        value={inputValue}
                        isTyping={isTyping}
                        onChange={(e) => setInputValue(e.target.value)}
                        processCommand={processCommand}
                        handleUpArrow={handleUpArrow}
                        handleDownArrow={handleDownArrow}
                     />
                  )}
               </div>
            </div>
         ) : (
            <p className="text-sm leading-relaxed font-mono">
               Hi, I'm an experienced software engineer skilled in various
               programming langauges and technologies like Python, Go, gRPC
               JavaScript, Web Application Development, DevOps, Cloud and Linux.
               I have Bachelors Degree in Computer Science Engineering.
               Interested in working on Revolutionary technologies and solving
               real-world problems through technology...
            </p>
         )}
      </div>
   )
}

export default Terminal
