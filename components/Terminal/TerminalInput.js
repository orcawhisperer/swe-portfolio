import React, { useEffect } from "react"
import { useSelector } from "react-redux"

const TerminalInput = ({
   value,
   onChange,
   processCommand,
   handleUpArrow,
   handleDownArrow,
}) => {
   const isTyping = useSelector((state) => state.terminal.terminal.isTyping)
   const handleKeyDown = () => (e) => {
      if (e.key === "Enter") {
         processCommand(value)
      }
      if (e.key === "ArrowUp") {
         handleUpArrow()
      }
      if (e.key === "ArrowDown") {
         handleDownArrow()
      }
   }

   return (
      !isTyping && (
         <div className="flex w-full">
            <span className="text-sm leading-relaxed font-mono">
               <span className="text-yellow-400">guest@command-center</span>
               <span className="text-yellow-500">:-$ </span>
            </span>

            <div className="input-container flex-grow relative pl-2">
               <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  onKeyDown={handleKeyDown()}
                  className="block bg-transparent text-green-500 font-mono focus:outline-none flex-grow w-full truncate"
                  style={{ caretColor: "green" }}
                  autoFocus={!isTyping ? true : false}
               />
            </div>
         </div>
      )
   )
}

export default TerminalInput
