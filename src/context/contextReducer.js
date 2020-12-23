import transitions from "@material-ui/core/styles/transitions";

export default function ContextReducer(state, action) {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            // alert("Delete");
            transactions = state.filter((t) => {
                return t.id !== action.payload
            })
            localStorage.setItem("transactions", JSON.stringify(transactions))
            return transactions;
        case 'ADD_TRANSACTION':
            // alert("Add");
            transactions = [action.payload, ...state];
            localStorage.setItem("transactions", JSON.stringify(transactions))
            return transactions;
        default:
            return state;
    }
}