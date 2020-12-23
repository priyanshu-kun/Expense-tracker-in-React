import transitions from "@material-ui/core/styles/transitions";

export default function ContextReducer(state, action) {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            // alert("Delete");
            transactions = state.filter((t) => {
                return t.id !== action.payload
            })
            return transactions;
        case 'ADD_TRANSACTION':
            // alert("Add");
            transactions = [action.payload, ...state];
            return transactions;
        default:
            return state;
    }
}