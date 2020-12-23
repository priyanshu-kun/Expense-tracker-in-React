import React from 'react';
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./appStyles";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui"

function App() {
    const classes = useStyles();
    return (
        <div>
            <Grid classes={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: "100vh" }}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <div style={{ transform: "scale(0.7)" }}>
                <PushToTalkButtonContainer >
                    <PushToTalkButton />
                    <ErrorPanel />
                </PushToTalkButtonContainer>
            </div>
        </div>
    )
}

export default App
