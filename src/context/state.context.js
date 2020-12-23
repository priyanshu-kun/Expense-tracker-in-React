// import transitions from "@material-ui/core/styles/transitions";
import React, { useReducer, createContext } from "react";
import ContextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

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

    const Balance = transactions.reduce((accu, crrVal) => {
        return (crrVal.type === "Expense" ? accu - crrVal.amount : accu + crrVal.amount)
    }, 0)

    console.log(Balance)

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            Balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

