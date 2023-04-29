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
      prank: {
         isRunning: false,
         count: 0,
      },

      terminalShowCount: 1,
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
         state.terminal = {
            ...state.terminal,
            showTerminal: action.payload,
            terminalShowCount:
               action.payload === true
                  ? state.terminal.terminalShowCount + 1
                  : state.terminal.terminalShowCount,
         }
      },
      setIsClosing: (state, action) => {
         state.terminal.isClosing = action.payload
      },
      runPrank: (state, action) => {
         state.terminal = {
            ...state.terminal,
            prank: {
               isRunning: action.payload,
               count:
                  action.payload === true
                     ? state.terminal.prank.count + 1
                     : state.terminal.prank.count,
            },
         }
      },
   },
})

export const {
   addHistory,
   deleteHistory,
   setIsTyping,
   setShowTerminal,
   setIsClosing,
   runPrank,
} = terminalSlice.actions

export const terminalReducer = terminalSlice.reducer
