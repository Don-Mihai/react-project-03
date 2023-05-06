import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';

const Secondary = ({ onChange, formValues }) => {
    return (
        <>
            <TextField onChange={onChange} value={formValues.name} name="name" label="Имя" variant="filled" fullWidth />
            <TextField onChange={onChange} value={formValues.surname} name="surname" label="Фамилия" variant="filled" fullWidth />
        </>
    );
};

export default Secondary;
