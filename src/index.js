import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <StrictMode>
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    // </StrictMode>
);
