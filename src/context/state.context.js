import transitions from "@material-ui/core/styles/transitions";
import React, { useReducer, createContext } from "react";
import ContextReducer from "./contextReducer";
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

    const [transactions, dispatch] = useReducer(ContextReducer, initialState);

    console.log(transactions);

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

