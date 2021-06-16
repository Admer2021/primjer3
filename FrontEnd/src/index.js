import React from 'react'
import ReactDOM from 'react-dom';

import { CarsProvider } from './Context/CarsContext';
import App from './App'

ReactDOM.render(
        <CarsProvider>
            <App />
        </CarsProvider>,
        document.getElementById("root")
);
