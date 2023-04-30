import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';

const Secondary = ({}) => {
    return (
        <>
            <TextField label="Имя" variant="filled" fullWidth />
            <TextField label="Фамилия" variant="filled" fullWidth />
        </>
    );
};

export default Secondary;
