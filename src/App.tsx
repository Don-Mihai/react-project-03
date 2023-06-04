import React, { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Drawer from './components/Drawer';

export function App() {
    const [userOpened, setUserOpened] = useState(false);

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    return (
        <div className="wrapper">
            {userOpened && <Drawer onClose={toggleUserOpened} />}
            <Header onClickUser={toggleUserOpened} />
            <Outlet />
        </div>
    );
}

export default App;
