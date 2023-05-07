import { useState } from 'react';
import './Home.scss';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Button } from '@mui/material';
import FreelanceSection from '../../components/FreelanceSection';

const cn = bemCreator('page-home');

const Home = () => {
    return (
        <div className={cn()}>
            <Header />
            <div className={cn('first')}>
                <Link to={'/create-order'}>
                    <Button variant="contained" className={cn('button')}>
                        Разместить задание
                    </Button>
                </Link>
            </div>
            <FreelanceSection />
        </div>
    );
};

export default Home;
