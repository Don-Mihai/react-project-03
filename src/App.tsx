import React, { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';

export function App() {
    const currentUser = useAppSelector(store => store.user.currentUser);
    const navigate = useNavigate();

    const [userOpened, setUserOpened] = useState(false);

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    return (
        <div className="wrapper">
            {userOpened && <Drawer onClose={toggleUserOpened} setUserOpened={setUserOpened} />}
            <Header onClickUser={toggleUserOpened} />
            <Outlet />
        </div>
    );
}

export default App;
