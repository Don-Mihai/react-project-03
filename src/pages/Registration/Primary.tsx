import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import { Props } from '.';
import { INPUTS_NAME } from '../../types';

interface IProps extends Props {
    ref: any;
}

export interface IPrimaryRef {
    validation: () => boolean;
}

const Primary = forwardRef<IPrimaryRef, IProps>(({ onChange, formValues }, ref) => {
    const validation = () => {
        console.log('происходит валидация');
        return true;
    };

    useImperativeHandle(ref, () => ({
        validation,
    }));

    return (
        <>
            <TextField
                className="adfafd"
                onChange={onChange}
                value={formValues[INPUTS_NAME.NAME]}
                name={INPUTS_NAME.NAME}
                label="Имя"
                variant="outlined"
                fullWidth
            />
            <TextField onChange={onChange} value={formValues[INPUTS_NAME.SURNAME]} name={INPUTS_NAME.SURNAME} label="Фамилия" variant="outlined" fullWidth />
            <TextField onChange={onChange} value={formValues[INPUTS_NAME.EMAIL]} name={INPUTS_NAME.EMAIL} label="Емейл" variant="outlined" fullWidth />

            {/* <TextField onChange={onChange} onKeyUp={onEnter} value={formValues.skill} name="skill" label="Навыки" variant="filled" fullWidth />
            {skills.map((skill, index) => (
                <Chip key={index} label={skill}></Chip>
            ))} */}
        </>
    );
});

export default Primary;
