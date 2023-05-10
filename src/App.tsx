import React, { useState } from 'react';
import './index.scss';
import Header from './components/HeaderNew/Header';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './pages/HomeNew';

export interface Freelancer {
    id: number;
    name: string;
    image: string;
    status: string;
    skills: string[];
    ratePerHour: number;
    rating: number;
}

export function App({}) {
    const [userOpened, setUserOpened] = useState(false);
    const [freelancers, setFrelancers] = useState<Freelancer[]>([
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
    ]);

    const toggleUserOpened = () => {
        setUserOpened(!userOpened);
    };

    return (
        <div className="wrapper">
            {userOpened && <Drawer onClose={toggleUserOpened} />}
            <Header onClickUser={toggleUserOpened} />
            <Routes>
                <Route path="/" element={<Home freelancers={freelancers} />}></Route>
            </Routes>
        </div>
    );
}

export default App;
