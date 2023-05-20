import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from './components/HeaderNew/Header';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './pages/HomeNew';
import Registration from './pages/Registration';
import Auth from './pages/Auth';
import axios from 'axios';
import Profile from './pages/Profile';
import { INPUTS_NAME } from './types';

export interface Freelancer {
    id: number;
    [INPUTS_NAME.LOGIN]: string;
    password: string;
    name: string;
    image: string;
    status: string;
    skills: string[];
    ratePerHour: number;
    rating: number;
}

const frel = [
    {
        id: 1,
        name: 'Лара Фабиан',
        image: './images/freelancers/1.png',
        status: 'Full-Stack разработчик',
        skills: ['верстка', 'сайт "под ключ"', 'wordpress', 'интернет-магазин'],
        ratePerHour: 1500,
        rating: 90,
    },
    {
        id: 2,
        name: 'Марк Орлов',
        image: './images/freelancers/2.png',
        status: 'UX/UI дизайнер',
        skills: ['банеры', 'дизайн сайтов', 'моб. дизайн', 'дизайн в соц. сетях'],
        ratePerHour: 800,
        rating: 99,
    },
    {
        id: 3,
        name: 'Тимур Леонов',
        image: './images/freelancers/3.png',
        status: 'Full-Stack разработчик',
        skills: ['верстка', 'сайт "под ключ"', 'wordpress', 'интернет-магазин'],
        ratePerHour: 2000,
        rating: 100,
    },
];

export function App({}) {
    const [userOpened, setUserOpened] = useState(false);
    const [freelancers, setFrelancers] = useState<Freelancer[]>([]);

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    const fetchFreelancers = () => {
        axios.get('https://645f57d47da4477ba9554f96.mockapi.io/frelancers').then(response => {
            setFrelancers(response.data);
        });
    };

    useEffect(() => {
        fetchFreelancers();
    }, []);

    return (
        <div className="wrapper">
            {userOpened && <Drawer onClose={toggleUserOpened} />}
            {/* <Header onClickUser={toggleUserOpened} /> */}
            <Routes>
                <Route path="/" element={<Home freelancers={freelancers} />}></Route>
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
    );
}

export default App;
