import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import TypingEffect from "./TypingEffect"
import TerminalInput from "./TerminalInput"
import styles from "./Terminal.module.css"

import {
   addHistory,
   deleteHistory,
   runPrank,
   setShowTerminal,
} from "@/sagas/reducers/terminal.reducer"

const Terminal = ({ aboutMeText }) => {
   const [inputValue, setInputValue] = useState("")
   const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1)
   const router = useRouter()
   const terminalContainerRef = useRef(null)
   const dispatch = useDispatch()
   const history = useSelector((state) => state.terminal.terminal.history)
   const showTerminal = useSelector(
      (state) => state.terminal.terminal.showTerminal
   )
   const prank = useSelector((state) => state.terminal.terminal.prank)
   const terminalShowCount = useSelector(
      (state) => state.terminal.terminal.terminalShowCount
   )

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
            if (!prank.isRunning && prank.count < 1) {
               setInputValue("")
               dispatch(runPrank(true))
               executePrank()
            } else {
               output = "Hello there!"
            }
            break
         case "clear":
            dispatch(deleteHistory())
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
               dispatch(
                  addHistory({
                     input: command,
                     output: "Closing terminal... Bye!",
                  })
               )
            }, 1000)
            setTimeout(() => {
               dispatch(deleteHistory())
               dispatch(setShowTerminal(false))
               window.close()
            }, 2000)

            break
         default:
            output = "Invalid Command!"
            setInputValue("Invalid Command!")
      }
      if (output) {
         dispatch(
            addHistory({
               input: command,
               output,
            })
         )
      }
      setInputValue("")
   }

   const renderTerminalHistory = () => {
      return history?.map((messageObj, index) => (
         <div key={index}>
            <div className="text-sm leading-relaxed font-mono">
               <span className="text-yellow-400">guest@command-center</span>
               <span className="text-yellow-500">:-$ </span>
               <span className="text-green-400">{messageObj.input}</span>
            </div>
            <div className="text-sm leading-relaxed font-mono">
               <TypingEffect text={messageObj.output} typingSpeed={40} />
            </div>
         </div>
      ))
   }

   const handleUpArrow = () => {
      if (commandHistoryIndex < history.length - 1) {
         setCommandHistoryIndex(commandHistoryIndex + 1)
         setInputValue(history[history.length - commandHistoryIndex - 2].input)
      }
   }

   const handleDownArrow = () => {
      if (commandHistoryIndex > 0) {
         setCommandHistoryIndex(commandHistoryIndex - 1)
         setInputValue(history[history.length - commandHistoryIndex].input)
      } else if (commandHistoryIndex === 0) {
         setCommandHistoryIndex(-1)
         setInputValue("")
      }
   }

   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

   const prankCommands = [
      {
         command: "Executing hack...\n",
         response: "Accessing target system...\n",
      },
      {
         command: "Bypassing firewall...\n",
         response: "Firewall bypassed successfully...\n",
      },
      {
         command: "Cracking password...\n",
         response: "Password cracked! Access granted...\n",
      },
      {
         command: "Searching for sensitive data...\n",
         response: "Sensitive data found! Downloading...\n",
      },
      {
         command: "Infiltrating network...\n",
         response: "Network infiltration successful...\n",
      },
      {
         command: "Disabling security systems...\n",
         response: "Security systems disabled...\n",
      },
      {
         command: "Uploading virus...\n",
         response: "Virus uploaded! System compromised...\n",
      },
      {
         command: "Gaining control of devices...\n",
         response: "Control established! All devices under control...\n",
      },
      {
         command: "Erasing tracks...\n",
         response: "Tracks erased! Operation undetected...\n",
      },
      {
         command: "Mission accomplished. Returning control to user...\n",
         response: "User control restored. Have a nice day!\n",
      },
   ]

   const executePrank = async () => {
      for (const cmd of prankCommands) {
         await delay(cmd.command.length * 50) // Simulate typing the command
         dispatch(addHistory({ input: "", output: cmd.command }))
         await delay(cmd.response.length * 50) // Simulate typing the response
         dispatch(addHistory({ input: "", output: cmd.response }))
      }
      setInputValue("")
      dispatch(runPrank(false))
   }

   useEffect(() => {
      if (terminalContainerRef.current) {
         terminalContainerRef.current.scrollTop =
            terminalContainerRef.current.scrollHeight
      }
   }, [history])

   return (
      <div
         ref={terminalContainerRef}
         className={`${
            styles["terminal"]
         } scroll-smooth bg-black p-6 rounded-md shadow-lg overflow-y-auto flex flex-col h-96 ${
            !showTerminal ? styles["terminal-closing"] : ""
         }`}>
         <div className="relative flex-grow">
            {terminalShowCount <= 1 && (
               <>
                  <span className="text-sm leading-relaxed font-mono">
                     <span className="text-red-400">
                        vasanth@command-center
                     </span>
                     <span className="text-red-500">:/# </span>
                  </span>

                  <TypingEffect text={aboutMeText} typingSpeed={40} />
               </>
            )}
            {renderTerminalHistory()}
            <TerminalInput
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               processCommand={processCommand}
               handleUpArrow={handleUpArrow}
               handleDownArrow={handleDownArrow}
            />
         </div>
      </div>
   )
}

export default Terminal
