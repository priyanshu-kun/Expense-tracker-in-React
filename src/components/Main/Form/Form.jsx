import React, { useState, useContext } from 'react';
import { ExpenseTrackerContext } from '../../../context/state.context';
import { v4 as uuidv4 } from 'uuid';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import useStyles from './formStyles';
import {
  incomeCategories,
  expenseCategories,
} from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';

const initialFormState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};

function Form() {
  const classes = useStyles();
  const [initialState, setInitialState] = useState(initialFormState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const selectedCategories =
    initialState.type === 'Income' ? incomeCategories : expenseCategories;

  const handleCreateButtonClick = () => {
    // alert('Create transaction');
    const transaction = {
      ...initialState,
      amount: Number(initialState.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setInitialState(initialFormState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={initialState.type}
            onChange={(e) => {
              setInitialState({ ...initialState, type: e.target.value });
            }}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={initialState.category}
            onChange={(e) => {
              setInitialState({ ...initialState, category: e.target.value });
            }}
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={initialState.amount}
          onChange={(e) => {
            setInitialState({ ...initialState, amount: e.target.value });
          }}
          type="number"
          label="amount"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={initialState.date}
          onChange={(e) => {
            setInitialState({
              ...initialState,
              date: formatDate(e.target.value),
            });
          }}
          type="date"
          label="date"
          fullWidth
        />
      </Grid>
      <Button
        className={classes.button}
        color="primary"
        fullWidth
        onClick={handleCreateButtonClick}
      >
        Create
      </Button>
    </Grid>
  );
}

export default Form;
