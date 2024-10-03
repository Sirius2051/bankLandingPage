import React from 'react';
import { createRoot } from "react-dom/client";

import "../static/css/style.css";
import App from './App';

const app = createRoot( document.querySelector('#app') );

app.render(
    <App />
);