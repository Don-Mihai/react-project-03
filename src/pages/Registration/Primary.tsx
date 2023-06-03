import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import { Props } from '.';
import Chip from '@mui/material/Chip';
import { INPUTS_NAME } from '../../types';

interface IProps extends Props {
    onEnter: (event: any) => void;
    skills: string[];
}

const Primary = ({ onChange, formValues, onEnter, skills }: IProps) => {
    return (
        <>
            <TextField onChange={onChange} value={formValues[INPUTS_NAME.LOGIN]} name={INPUTS_NAME.LOGIN} label="Логин" variant="outlined" fullWidth />
            <TextField onChange={onChange} value={formValues[INPUTS_NAME.SURNAME]} name={INPUTS_NAME.SURNAME} label="Фамилия" variant="outlined" fullWidth />
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
            {/* <TextField onChange={onChange} onKeyUp={onEnter} value={formValues.skill} name="skill" label="Навыки" variant="filled" fullWidth />
            {skills.map((skill, index) => (
                <Chip key={index} label={skill}></Chip>
            ))} */}
        </>
    );
};

export default Primary;
