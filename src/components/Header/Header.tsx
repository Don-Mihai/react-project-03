import React from 'react';
import './Header.scss';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const cn = bemCreator('component-header');

const Header = ({}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/registration');
    };

    return (
        <header className={cn()}>
            <img src="/images/logo.svg" alt="logo" />
            <nav className={cn('links')}>
                <Link className={cn('link')} to={''}>
                    Заказчикам
                </Link>
                <Link className={cn('link')} to={''}>
                    Фрилансерам
                </Link>
                <Link className={cn('link')} to={''}>
                    Вакансии
                </Link>
            </nav>
            <div className={cn('links')}>
                <Link className={cn('link')} to={'/auth'}>
                    Вход
                </Link>

                <Link to={'/registration'}>
                    <Button className={cn('button')} variant="contained">
                        Регистрация
                    </Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
