import React, { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Auth from './pages/Auth';
import CreateOrder from './pages/CreateOrder';
import Profile from './pages/Profile';

export function App() {
    const [userOpened, setUserOpened] = useState(false);

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    return (
        <div className="wrapper">
            {userOpened && <Drawer onClose={toggleUserOpened} />}
            <Header onClickUser={toggleUserOpened} />
            <Routes>
                <Route path="/create-order" element={<CreateOrder />}></Route>
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
    );
}

export default App;
