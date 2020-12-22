import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    income: {
        borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
        marginLeft: "20px",
        borderRadius: "20px",
        boxShadow: "none"
    },
    expense: {
        borderBottom: "10px solid orange",
        marginRight: "20px",
        borderRadius: "20px",
        boxShadow: "none"
    }
}))