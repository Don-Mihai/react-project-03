import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import ProfileType from './ProfileType';
import { Props } from '.';
import { INPUTS_NAME } from '../../types';

const Secondary = ({ formValues, onChange }: Props) => {
    return (
        <div>
            <TextField onChange={onChange} value={formValues[INPUTS_NAME.LOGIN]} name={INPUTS_NAME.LOGIN} label="Логин" variant="outlined" fullWidth />
            <TextField
                onChange={onChange}
                value={formValues[INPUTS_NAME.PASSWORD]}
                name={INPUTS_NAME.PASSWORD}
                label="Придумайте пароль"
                variant="outlined"
                fullWidth
            />
            <TextField
                onChange={onChange}
                value={formValues[INPUTS_NAME.PASSWORD_REPEAT]}
                name={INPUTS_NAME.PASSWORD_REPEAT}
                label="Введите пароль повторно"
                variant="outlined"
                fullWidth
            />
        </div>
    );
};

export default Secondary;
