import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography } from '@material-ui/core';
////////////
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//////
import axios from 'axios';
import { AnyAaaaRecord } from 'dns';

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

type TMoney = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
}

function App() {
  const classes = useStyles();
  const [money, setMoney] = useState<TMoney[]>([])

  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) => {
      const money: TMoney[] = data.Data.map((mon: any) => {
        console.log(mon.CoinInfo.ImageUrl);
        const obj: TMoney = {
          name: mon.CoinInfo.Name,
          fullName: mon.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com${mon.CoinInfo.ImageUrl}`,
          price: Math.round(mon.RAW.USD.VOLUME24HOUR),
          volume24Hour: Math.round(mon.RAW.USD.VOLUME24HOUR),
        }
        return obj;
      })
      console.log(money)
      setMoney(money);
    })
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">volume24hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {money.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell ><img className={classes.currencyImg} src={row.imageUrl} alt="" /></TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.fullName}</TableCell>
                    <TableCell align="left">${row.price}</TableCell>
                    <TableCell align="left">${row.volume24Hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel id="demo-customized-select-label">Валюта</InputLabel>
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
              </FormControl >
            </div>
            <div className={classes.currencyInputBox}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel id="demo-customized-select-label">Валюта</InputLabel>
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
              </FormControl >
            </div>
            <Typography variant="h5" component="h5">
              74,03 Российский рубль
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
