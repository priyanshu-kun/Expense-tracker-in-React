import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        margin: "0 20px",
        // boxShadow: "none",
        // borderTop: "10px solid #000000",
        // borderBottom: "10px solid #000000",
        boxShadow: "10px 15px 20px rgba(0,0,0,0.23)",
        borderRadius: "20px",

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardContent: {
        paddingTop: 0,
    },
    divider: {
        margin: '20px 0',
    },
}));