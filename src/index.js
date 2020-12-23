import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import { ContextProvider } from "./context/state.context";

ReactDOM.render(
    <SpeechProvider appId="606a62a9-9b93-4b25-98fc-9e9c433eb3a7" language="en-US">
        <ContextProvider>
            <App />
        </ContextProvider>
    </SpeechProvider>,
    document.getElementById("root")
);