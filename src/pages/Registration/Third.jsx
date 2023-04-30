import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Third = () => {
    return (
        <div>
            <div>
                <TextField label="Логин" variant="filled" fullWidth />
                <TextField label="Пароль" variant="filled" fullWidth />
            </div>
        </div>
    );
};

export default Third;
