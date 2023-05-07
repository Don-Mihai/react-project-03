import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Auth from './pages/Auth';
import Registration from './pages/Registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CreateOrder from './pages/CreateOrder';

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/registration',
        element: <Registration />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/create-order',
        element: <CreateOrder />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
