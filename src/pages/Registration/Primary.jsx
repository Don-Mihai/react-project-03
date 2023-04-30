import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';

const Primary = ({ onChange, formValues }) => {
    return (
        <>
            <TextField onChange={onChange} value={formValues.login} name="login" label="Логин" variant="filled" fullWidth />
            <TextField onChange={onChange} value={formValues.password} name="password" label="Пароль" variant="filled" fullWidth />
        </>
    );
};

export default Primary;
