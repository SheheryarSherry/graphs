import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E9EEF2',
        padding: 10,
        margin:5,
        borderRadius:20,
        "@media (max-width: 599px)": {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
        },
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        textAlign: 'center',
    },
    inputField: {
        border: '1px solid #000000',
        textAlign: 'center',
        fontSize: 10,
        borderRadius: 10,
        height:57,
        width:'98.5%'
    }
}));

function Controls() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>

                <Grid item xs={6} sm={6}>
                <input style={{width:'96.5%'}} placeholder='NAME' type="text" className={classes.inputField} />
                    {/* <TextField className={classes.textField} id="outlined-basic" label="NAME"  variant="outlined" /> */}
                </Grid>
                <Grid item xs={6} sm={6}>
                    {/* <TextField className={classes.textField} id="outlined-basic" label="EXCERCISE" variant="outlined" /> */}
                    <input style={{width:'96.5%'}} placeholder='EXERCISE' type="text" className={classes.inputField} />
                </Grid>
                <Grid item xs={12}>
                    {/* <TextField className={classes.textField} style={{fontSize:24, textAlign:'center'}} id="outlined-basic" label="DESCRIPTION" variant="outlined" /> */}
                    <input placeholder='DESCRIPTION' type="text" className={classes.inputField} />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        style={{borderRadius: 10,backgroundColor:'#C3EAB1', width:'100%', height:70,fontWeight:'bold',border: '1px solid #000000'}}
                        
                        endIcon={<FiberManualRecordIcon />}
                    >
                        RECORD
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default Controls
