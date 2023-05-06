import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import { Props } from '.';
import Chip from '@mui/material/Chip';

interface IProps extends Props {
    onEnter: (event: any) => void;
    skills: string[];
}

const Primary = ({ onChange, formValues, onEnter, skills }: IProps) => {
    return (
        <>
            <TextField onChange={onChange} value={formValues.login} name="login" label="Логин" variant="filled" fullWidth />
            <TextField onChange={onChange} value={formValues.password} name="password" label="Пароль" variant="filled" fullWidth />
            <TextField onChange={onChange} onKeyUp={onEnter} value={formValues.skill} name="skill" label="Навыки" variant="filled" fullWidth />
            {skills.map((skill, index) => (
                <Chip key={index} label={skill}></Chip>
            ))}
        </>
    );
};

export default Primary;
