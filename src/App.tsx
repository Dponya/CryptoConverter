import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cryptoInputBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-b etween'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
              <TextField fullWidth label="Валюта" />
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={10}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
