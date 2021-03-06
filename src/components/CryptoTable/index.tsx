import React, { useEffect } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IMoney } from '../../library/common/types/index';
import { observer, inject } from 'mobx-react';
import CurrenciesStore from '../../main/stores/currenciesStore'


interface ICryptoTable {
    classes: any,
    currenciesStore?: CurrenciesStore
}

const CryptoTable = inject('currenciesStore')((
    observer(({ classes, currenciesStore }: ICryptoTable) => {
        const items: IMoney[] = currenciesStore!.getItems;

        useEffect(() => {
            currenciesStore!.fetchMoney();
        }, []);

        return (
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
                        {!items.length ? 'Loading...' : items.map((row) => (
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
        )
    })))

export default CryptoTable;
