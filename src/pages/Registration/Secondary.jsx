import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';

const Secondary = ({}) => {
    return (
        <>
            <TextField label="Имя" name="name" variant="filled" fullWidth />
            <TextField label="Фамилия" name="surname" variant="filled" fullWidth />
        </>
    );
};

export default Secondary;
