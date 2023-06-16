import React, { MouseEvent } from 'react';

import bemCreator from '../bemCreator';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { DrawerProps } from '.';

const cn = bemCreator('drawer');

type DrawerButtonProps = Omit<DrawerProps, 'onClose'>;

const ButtonsForCustomer = ({ setUserOpened }: DrawerButtonProps) => {
    //Закрыть drawer при клике на кнопку

    const handleClickButton = (event: MouseEvent<HTMLAnchorElement>) => {
        setUserOpened(false);
    };

    return (
        <div className={cn('buttons')}>
            <Button onClick={handleClickButton} component={Link} to="/profile" variant="contained" fullWidth>
                Профиль
            </Button>
            <Button onClick={handleClickButton} component={Link} to="/all-freelancers" variant="outlined" fullWidth>
                Найти фрилансера
            </Button>
            <Button onClick={handleClickButton} component={Link} to="/create-order" variant="outlined" fullWidth>
                Создать проект
            </Button>
        </div>
    );
};

export default ButtonsForCustomer;
