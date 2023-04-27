// Terminal slice reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   terminal: {
      history: [],
      current: "",
      cursor: 0,
      isTyping: true,
      showTerminal: true,
      isClosing: false,
   },
}

const terminalSlice = createSlice({
   name: "terminal",
   initialState,
   reducers: {
      addHistory: (state, action) => {
         state.terminal.history.push(action.payload)
      },
      deleteHistory: (state, action) => {
         state.terminal.history = []
      },
      setIsTyping: (state, action) => {
         state.terminal.isTyping = action.payload
      },
      setShowTerminal: (state, action) => {
         state.terminal.showTerminal = action.payload
      },
      setIsClosing: (state, action) => {
         state.terminal.isClosing = action.payload
      },
   },
})

export const {
   addHistory,
   deleteHistory,
   setIsTyping,
   setShowTerminal,
   setIsClosing,
} = terminalSlice.actions

export const terminalReducer = terminalSlice.reducer
