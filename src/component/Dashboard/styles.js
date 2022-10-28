import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({

    root : {
        minWidth : '45%',
        height : '60%',
        display: 'flex',
        flexDirection: 'column'
    },
    media : {
        height : '0',
        paddingTop : '56.25%'
    },
    cardActions : {
        display: 'flex',
        justifyContent : 'space-between'
    },
    cardContent : {
        display: 'flex',
        justifyContent : 'space-between'
    },
    headR : {
        minWidth : '100%',
        display: 'flex',
        flexDirection: 'row',
        
    }

}))