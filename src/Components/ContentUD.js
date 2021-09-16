import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
            minWidth: 55,
          },
        "@media (max-width: 1000px)": {
            minWidth: 50,
          },
        "@media (max-width: 900px)": {
            minWidth: 30,
          },
        "@media (max-width: 850px)": {
            minWidth: 10,
            padding:5
          },
          "@media (max-width: 602px)": {

            minWidth: 10,
          },
          "@media (max-width: 610px)": {
              minWidth: 5,
            },
            "@media (max-width: 599px)": {
                minWidth: 90,
            },
            "@media (max-width: 540px)": {
              minWidth: 80,
            },
            "@media (max-width: 532px)": {
              minWidth: 80,
            },
            "@media (max-width: 520px)": {
              minWidth: 80,
            },
            "@media (max-width: 511px)": {
              minWidth: 70,
            },
         
            "@media (max-width: 422px)": {
                minWidth: 62,
                padding:0
            },
            "@media (max-width: 411px)": {
                minWidth: 60,
                padding:0
              },
            "@media (max-width: 375px)": {
                minWidth: 55,
                padding:0
            },
            "@media (max-width: 320px)": {
              minWidth: 45,
            },
       
        
        
    }
}));

function ContentUD(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Grid  container spacing={1}>
                        <Grid style={{ padding: 1 }} item xs={3}>
                            <div style={{ border: '1px solid #000000', backgroundColor: props.color, borderRadius: 7 , height: 37 ,width: '89%' }}>
                                <Typography style={{fontSize: 9, textAlign: 'center',paddingTop:10}} >
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
                        <div style={{paddingRight:5, marginTop: 1, height: 44 }}>

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
