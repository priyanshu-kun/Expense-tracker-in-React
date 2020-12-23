import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import Form from './Form/Form';
import useStyles from './mainStyles';
import List from './List/List';

function Main() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ opacity: '0.6' }}
        className={classes.heading}
        title="Expense Tracker"
        subheader="Powered by speechly"
      />
      <CardContent>
        <Typography
          style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            padding: '5px 10px',
            borderRadius: '5px',
            background: ' rgba(54, 209, 220,0.2)',
            opacity: '0.8',
          }}
          align="center"
          variant="h5"
        >
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: '1.5rem',
            marginTop: '20px',
            textAlign: 'center',
            opacity: '0.6',
          }}
        >
          {/* for speechly */}
          Try Saying: Add income for $100 in Category Salery for Monday...
        </Typography>
        <Divider />
        {/* form */}
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* List */}
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
