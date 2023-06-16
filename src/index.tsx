import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Auth from './pages/Auth';
import Home from './pages/Home';
import CreateOrder from './pages/CreateOrder';
import CardIdPage from './pages/CardIdPage';
import FindFreelancers from './pages/FindFreelancers';
import AllProjects from './pages/AllProjects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cards/:id',
                element: <CardIdPage />,
            },
            {
                path: 'create-order',
                element: <CreateOrder />,
            },
            {
                path: 'find-freelancers',
                element: <FindFreelancers />,
            },
            {
                path: 'all-projects',
                element: <AllProjects />,
            },
            // {
            //     path: 'freelacers',
            //     element: <Freelacer />,
            //     children:[
            //         {
            //             path: '',
            //             element: <FreelacerProfile />,
            //         }
            //     ]
            // },
        ],
    },
    {
        path: '/registration',
        element: <Registration />,
    },
    {
        path: '/auth',
        element: <Auth />,
    },
]);

ReactDOM.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
    document.getElementById('root')
);
