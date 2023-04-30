import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';

const Primary = ({}) => {
    return (
        <>
            <TextField label="Логин" variant="filled" fullWidth />
            <TextField label="Пароль" variant="filled" fullWidth />
        </>
    );
};

export default Primary;
