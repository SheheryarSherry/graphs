import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import { alpha, makeStyles } from '@material-ui/core/styles';
import logo from '../assets/Logo.png';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    appBar: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#2C3238',
        height: 89,
    },
    button: {
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            minWidth: 10,
            paddingLeft: 8,
            paddingRight: 8,
            "& .MuiButton-endIcon": {
                margin: 0
            }
        }
    },
    buttonText: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        // padding: theme.spacing(0),
        textAlign: 'center',
        color: '#FFFFFF',
        // alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#2C3238',
        // height: 35
    },
    gridBackground: {
        "@media (max-width: 1200px)": {
            margin: '25%',
        },
        "@media (max-width: 600px)": {
            margin: '10%',
        },
        backgroundColor: 'rgba(44, 50, 56, 0.85)',
        borderRadius: 20,
        // padding:10,
        paddingTop: 0,

    },
    SelectLabel: {

        // height:50,
        fontSize: 10,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 0,
        flexWrap: 'wrap',
        "@media (max-width: 1200px)": {
            height: 50,
        },
        "@media (max-width: 600px)": {
            height: 20,
        },
    },
    SelectInput: {
        backgroundColor: '#2C3238',
        fontSize: 11,
        fontStyle: 'normal',
        textAlign: 'center',
        color: 'white',
        alignSelf:'center',
        width: '95%',
        padding:5,
        borderRadius: 6
    },
    thumb: {
        background: "white",
    },
    mark: {
        background: "white"
    },
    rail: {
        background: "white"
    },
    track: {
        background: "white"
    }
}));
const marks = [
    {
        value: 0,
        //   label: '0°C',
    },
    {
        value: 100,
        //   label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

function SearchAppBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>

            <AppBar className={classes.appBar} position="static">
                <Toolbar>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <img src={logo} alt="Logo" />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>

                    </Typography>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        onClick={handleOpen}
                        endIcon={<SettingsIcon />}
                    >
                        <span className={classes.buttonText}>SETTINGS</span>
                    </Button>
                    <Modal
                        open={open}

                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className={classes.modal}
                    >
                        <div className={classes.gridBackground}>


                            <Grid container spacing={0}>

                                <Grid item xs={12} >
                                    <div style={{ padding: 5, fontSize: 20 }} className={classes.paper}>SETTINGS</div>
                                </Grid>

                                <Grid style={{ padding: 30 }} container spacing={2} >

                                    <Grid item xs={12} sm={4} >
                                        <Grid container spacing={0}>
                                        <Grid item md={12} lg={12}   sm={6} xs={6}>
                                        <Typography className={classes.SelectLabel}>CHART TYPE:</Typography>
                                        </Grid>
                                        <Grid item md={12} lg={12} sm={6} xs={6}>
                                        <Select
                                            className={classes.SelectInput}
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={5}
                                            classes={{
                                                icon: '#FFFFFF'
                                            }}
                                        >
                                            
                                            <MenuItem value={5}>
                                                <em>DISTANCE OVER TIME</em>
                                            </MenuItem>
                                        </Select>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                    <Grid container spacing={0}>
                                        <Grid item md={12}   sm={6} xs={6}>
                                        <Typography className={classes.SelectLabel}>APPROXIMATE VALUE:</Typography>
                                        </Grid>
                                        <Grid item md={12}  sm={6} xs={6}>
                                        <Select
                                            className={classes.SelectInput}
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={5}
                                            classes={{
                                                icon: '#FFFFFF'
                                            }}
                                        >
                                            
                                            <MenuItem value={5}>
                                                <em>ONLY MISSING</em>
                                            </MenuItem>
                                        </Select>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                    <Grid container spacing={0}>
                                        <Grid item md={12} lg={12}   sm={6} xs={6}>
                                        <Typography className={classes.SelectLabel}>APPROXIMATE METHOD:</Typography>
                                        </Grid>
                                        <Grid item md={12} lg={12} sm={6} xs={6}>
                                        <Select
                                            className={classes.SelectInput}
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={5}
                                            classes={{
                                                icon: '#FFFFFF'
                                            }}
                                        >
                                            
                                            <MenuItem value={5}>
                                                <em>AMIKA SPLINE</em>
                                            </MenuItem>
                                        </Select>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ padding: 10, marginTop: 2 }} className={classes.paper}>
                                        <Typography style={{ fontSize: 10, textAlign: 'left' }} id="discrete-slider-custom" gutterBottom>
                                            CUSTOM MARKS
                                        </Typography>
                                        <Slider
                                            classes={{
                                                thumb: classes.thumb,
                                                rail: classes.rail,
                                                track: classes.track,
                                                valueLabel: classes.valueLabel,
                                                mark: classes.mark
                                            }}
                                            defaultValue={20}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider-custom"
                                            step={10}
                                            valueLabelDisplay="auto"
                                            marks={marks}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ padding: 10, marginTop: 2 }} className={classes.paper}>

                                        <Typography style={{ fontSize: 10, textAlign: 'left' }} id="discrete-slider-custom" gutterBottom>
                                            SET CUTOFF FREQUENCY
                                        </Typography>
                                        <Slider
                                            classes={{
                                                thumb: classes.thumb,
                                                rail: classes.rail,
                                                track: classes.track,
                                                valueLabel: classes.valueLabel,
                                                mark: classes.mark
                                            }}
                                            defaultValue={60}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider-custom"
                                            step={10}
                                            valueLabelDisplay="auto"
                                            marks={marks}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div style={{ padding: 10, marginTop: 2 }} className={classes.paper}>
                                        <Typography style={{ fontSize: 10, textAlign: 'left' }} id="discrete-slider-custom" gutterBottom>
                                            SET DELTA_T
                                        </Typography>
                                        <Slider
                                            classes={{
                                                thumb: classes.thumb,
                                                rail: classes.rail,
                                                track: classes.track,
                                                valueLabel: classes.valueLabel,
                                                mark: classes.mark
                                            }}
                                            defaultValue={40}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider-custom"
                                            step={10}
                                            valueLabelDisplay="auto"
                                            marks={marks}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ float: 'right' }}>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                        >
                                            SAVE SETTINGS
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default SearchAppBar;