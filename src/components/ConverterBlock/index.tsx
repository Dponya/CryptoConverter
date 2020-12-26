import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

interface IConverterBlock {
    classes: any
}

const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) => {
    return (
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
        </Paper>
    )
}

export default ConverterBlock;