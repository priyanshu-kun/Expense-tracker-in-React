import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: green[500],
    },
    avatarExpense: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: "6px"
        },

        '&::-webkit-scrollbar-track': {
            background: '#D7F6F8'
        },

        '&::-webkit-scrollbar-thumb': {
            background: 'rgb(91, 134, 229,0.6)'
            // background: 'rgb(0, 0, 0,0.1)'
            // borderRadius: "6px"
            // outline: '1px solid slategrey'
        }
    },

}));