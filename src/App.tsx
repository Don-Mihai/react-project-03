import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from './components/HeaderNew';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './pages/HomeNew';
import Registration from './pages/Registration';
import Auth from './pages/Auth';
import CreateOrder from './pages/CreateOrder';
import axios from 'axios';
import Profile from './pages/Profile';
import { INPUTS_NAME } from './types';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchCustomer } from './redux/customer';

export function App({}) {
    const [userOpened, setUserOpened] = useState(false);
    const frelancers = useAppSelector(state => state.customer.customers);

    const dispatch = useAppDispatch();

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    useEffect(() => {
        dispatch(fetchCustomer());
    }, []);

    return (
        <div className="wrapper">
            {userOpened && <Drawer onClose={toggleUserOpened} />}
            <Header onClickUser={toggleUserOpened} />
            <Routes>
                <Route path="/create-order" element={<CreateOrder />}></Route>
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/" element={<Home freelancers={frelancers} />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
    );
}

export default App;
