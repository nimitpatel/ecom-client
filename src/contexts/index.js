import { createContext, useReducer } from "react"

import { reducer } from "./reducer"

import { INITIAL_STATE } from './state'

export const Context = createContext(INITIAL_STATE)

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
