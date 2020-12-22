import React from 'react';
import {
  ListItem,
  List as MUIList,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './listStyle';

function List() {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Business',
      amount: 100,
      date: `Tue Dec 22 2020 16:44:49`,
    },
    {
      id: 2,
      type: 'Expense',
      category: 'Salery',
      amount: 100,
      date: `Tue Dec 22 2020 16:44:49`,
    },
    {
      id: 3,
      type: 'Expense',
      category: 'Business',
      amount: 100,
      date: `Tue Dec 22 2020 16:44:49`,
    },
    {
      id: 4,
      type: 'Income',
      category: 'Business',
      amount: 100,
      date: `Tue Dec 22 2020 16:44:49`,
    },
    {
      id: 5,
      type: 'Expense',
      category: 'Business',
      amount: 100,
      date: `Tue Dec 22 2020 16:44:49`,
    },
    {
      id: 6,
      type: 'Income',
      category: 'Business',
      amount: 100,
      date: `Tue Dec 22 2020 16:44:49`,
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((trans) => (
        <Slide direction="down" in mountOnEnter mountOnExit key={trans.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  trans.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={trans.category}
              secondary={`$${trans.amount} - ${trans.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                area-label="delete"
                onClick={() => {
                  alert('Delete');
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;
