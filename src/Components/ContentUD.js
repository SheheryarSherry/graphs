import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        width: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 48
    },
    inputField: {
        border: '1px solid #000000',
        textAlign: 'center',
        fontSize: 7,
        borderRadius: 7,
        height: '80%',
        width: '85%',
        paddingLeft: 1
    },
    UDButton: {
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 6,
        border: '1px solid #000000',
        height: 15,
        "@media (max-width: 1200px)": {
            minWidth: 30,
          },
        "@media (max-width: 600px)": {
            minWidth: 60,
          },
        
        
    }
}));

function ContentUD(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Grid container spacing={1}>
                        <Grid style={{ padding: 1 }} item xs={3}>
                            <div style={{ border: '1px solid #000000', backgroundColor: props.color, borderRadius: 7 , height: 37 ,width: '89%' }}>
                                <Typography style={{fontSize: 9, textAlign: 'center',padding:11}} >
                                    Value: 75 m
                                </Typography>
                            </div>
                        </Grid>
                        <Grid style={{ padding: 1 }} item xs={3}>
                            <div style={{  height: 44 }}>
                                <input placeholder='NAME' type="text" className={classes.inputField} />
                            </div>
                        </Grid>
                        <Grid style={{ padding: 1 }} item xs={3}>
                            <div style={{  height: 44 }}>
                                <input placeholder='EXERCISE' type="text" className={classes.inputField} />
                            </div>
                        </Grid>
                        <Grid style={{ padding: 1 }} item xs={3}>
                            <div style={{  height: 44 }}>
                                <input placeholder='DESCRIPTION' type="text" className={classes.inputField} />

                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} >
                    <Grid container spacing={1}>
                        <div style={{paddingLeft:5, marginTop: 1, height: 44 }}>

                            <div style={{ margin: 0, marginBottom: 0 }}>
                                <Button

                                    className={classes.UDButton}
                                >
                                    UPDATE
                                </Button>
                            </div>
                            <div style={{ margin: 0, marginBottom: 0 }}>
                                <Button

                                    className={classes.UDButton}
                                >
                                    DELETE
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}
export default ContentUD
