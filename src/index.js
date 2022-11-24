import React from 'react';
import ReactDOM from 'react-dom';

import "../static/css/style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from './App';

const app = createRoot( document.querySelector('#app') );

app.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);


