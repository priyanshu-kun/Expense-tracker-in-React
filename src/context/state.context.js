import React, { useReducer, createContext } from "react";
import ContextReducer from "./contextReducer";
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

    const [transaction, dispatch] = useReducer(ContextReducer, initialState);

    return (
        <ExpenseTrackerContext.Provider value={{ appName: "Expense tracker" }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

