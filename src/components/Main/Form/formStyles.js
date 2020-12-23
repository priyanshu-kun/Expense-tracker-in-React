import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    radioGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-10px',
    },
    button: {
        marginTop: '20px',
        background: "linear-gradient(to left,#36d1dc, #5b86e5)",
        boxShadow: "2px 3px 15px rgba(0,0,0,0.3)",
        color: "#fff",
        transition: "all 0.3s ease",
        '&:hover': {
            opacity: "0.8"
        }
    }
}));