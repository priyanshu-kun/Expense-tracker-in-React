import React, { useState, useEffect, useContext } from 'react';
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
import { useSpeechContext } from '@speechly/react-client';
import CustomizeSnackbar from '../../Snackbar/Snackbar';

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
  const { segment } = useSpeechContext();
  const [open, setOpen] = useState(false);

  const selectedCategories =
    initialState.type === 'Income' ? incomeCategories : expenseCategories;

  const handleCreateButtonClick = () => {
    if (
      Number.isNaN(Number(initialState.amount)) ||
      !initialState.date.includes('-')
    )
      return;
    // alert('Create transaction');
    setOpen(true);
    const transaction = {
      ...initialState,
      amount: Number(initialState.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setInitialState(initialFormState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setInitialState({ ...initialState, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setInitialState({ ...initialState, type: 'Income' });
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'create_transaction'
      ) {
        return handleCreateButtonClick();
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'cancel_transaction'
      ) {
        return setInitialState(initialFormState);
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value
          .slice(1)
          .toLowerCase()}`;
        switch (e.type) {
          case 'amount':
            setInitialState({ ...initialState, amount: e.value });
            break;
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setInitialState({ ...initialState, type: 'Income', category });
            } else if (
              expenseCategories.map((iC) => iC.type).includes(category)
            ) {
              setInitialState({ ...initialState, type: 'Expense', category });
            }
            break;
          case 'date':
            setInitialState({ ...initialState, date: e.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        initialState.amount &&
        initialState.category &&
        initialState.type
      ) {
        handleCreateButtonClick();
      }
    }
  }, [segment]);

  return (
    <Grid container spacing={2}>
      <CustomizeSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {segment && <>{segment.words.map((w) => w.value).join(' ')}</>}
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
