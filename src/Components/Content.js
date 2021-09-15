import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Controls from './Controls';
import ControlsCRUD from './ControlsCRUD';
import DataTable from './DataTable';
import Graph from './Graph'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item xs={12} sm={8}>
            <Graph/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controls/>

          <ControlsCRUD/>
        </Grid>
        <Grid  item xs={12}>
        <div style={{ 
          
          width: '100%'}}>
         <DataTable/>
         </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Content
