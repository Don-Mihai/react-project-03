import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import ProfileType from './ProfileType';

const Secondary = ({ onChange, formValues }) => {
    return (
        <>
            <TextField label="Имя" name="name" variant="filled" fullWidth />
            <TextField label="Фамилия" name="surname" variant="filled" fullWidth />
            <ProfileType formValues={formValues} onChange={onChange} />
        </>
    );
};

export default Secondary;
