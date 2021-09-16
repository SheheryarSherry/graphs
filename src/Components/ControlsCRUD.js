import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContentUD from './ContentUD';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E9EEF2',
        padding: 15,
        margin: 5,

        "@media (max-width: 599px)": {
            marginTop: -10,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
        },
        borderRadius: 20
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        width: 82,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 48
    },
    inputField: {
        border: '1px solid #000000',
        textAlign: 'center',
        fontSize: 9,
        borderRadius: 7,
        height: 43,
        width: '100%'
    }
}));

function ControlsCRUD() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ContentUD color='#33A02C' />
            <ContentUD color='#FB9A99' />
            <ContentUD color='#1F78B4' />
            <ContentUD color='#A6CEE3' />
            <ContentUD color='#B2DF8A' />
        </div>
    );
}
export default ControlsCRUD
