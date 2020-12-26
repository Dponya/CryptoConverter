import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { TMoney } from './library/common/types';
import { CryptoTable, ConverterBlock } from './components';
import useStyles from './library/common/styles/index';

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
          <CryptoTable items={money} classes={classes} />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
