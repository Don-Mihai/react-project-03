import './Header.scss';
import { Link } from 'react-router-dom';
import bemCreator from '../bemCreator';
import React, { useState } from 'react';

const cn = bemCreator('component-header');

const Header = ({ onClickUser }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={cn()}>
            <Link className={cn('wrap-logo')} to="/">
                <div className={cn('logo')}>
                    <img className={cn('logo-img')} width={40} height={40} src="/images/logo.svg" alt="logo" />
                    <div>
                        <h3 className={cn('title')}>REACT-FREELANCE</h3>
                        <p className={cn('subtitle')}>Лучшая биржа фриланса</p>
                    </div>
                </div>
            </Link>
            <div className={cn('burger', { active: isMenuOpen })} onClick={toggleMenu}>
                <span></span>
            </div>
            <div className={cn('menu', { active: isMenuOpen })}>
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
            </div>
            <div className={cn('user')} onClick={onClickUser}>
                <img width={18} height={18} src="/images/user.svg" alt="Пользователь" />
            </div>
        </header>
    );
};

export default Header;
