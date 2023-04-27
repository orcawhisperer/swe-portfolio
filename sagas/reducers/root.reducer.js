// root Reducer
import { combineReducers } from "@reduxjs/toolkit"
import { terminalReducer } from "./terminal.reducer"

export const rootReducer = combineReducers({
   terminal: terminalReducer,
})
