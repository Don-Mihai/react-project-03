import React from 'react';

import './Drawer.scss';
import bemCreator from '../bemCreator';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cn = bemCreator('drawer');

type DrawerProps = {
    onClose(): void;
    setUserOpened(arg: boolean): void;
};

const Drawer = ({ onClose, setUserOpened }: DrawerProps) => {
    const drawerRef = React.useRef<HTMLDivElement>(null);

    //Закрыть drawer при клике вне компонента
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const composed = event.composedPath();
            if (!composed.includes(drawerRef.current as HTMLDivElement)) {
                setUserOpened(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);
        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="overlay">
            <div className={cn()} ref={drawerRef}>
                <img className={cn('close')} onClick={onClose} src="/images/btn-remove.svg" alt="Close" />
                <div className={cn('wrap')}>
                    <h2 className={cn('title')}>Добро пожаловать на REACT-FREELANCE</h2>
                    <p className={cn('subtitle')}>Работайте без рисков, сэкономив время и деньги</p>

                    <div className={cn('buttons')}>
                        <Button component={Link} to="/auth" variant="outlined" fullWidth>
                            Вход
                        </Button>
                        <Button component={Link} to="/registration" variant="contained" fullWidth>
                            Регистрация
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
