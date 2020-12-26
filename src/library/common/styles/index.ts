import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    currencyInputBox: {
        marginBottom: 20,
        marginTop: 20
    },
    currencyInput: {
        minWidth: 'calc(80% - 10px)',
        marginRight: 10,
    },
    currencyType: {
        minWidth: '20%'
    },
    table: {
        minWidth: 650,
    },
    currencyImg: {
        width: 18,
        height: 18,
        borderRadius: 30,
    }
}));

export default useStyles;