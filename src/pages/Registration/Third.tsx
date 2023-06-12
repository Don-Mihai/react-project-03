import { useState } from 'react';
import './Registration.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormValues, Props } from './index';

import ProfileType from './ProfileType';

const Third = ({ formValues, onChange }: Props) => {
    return (
        <>
            {/* <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    onChange={onChange}
                    value={formValues.gender}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={formValues.gender}
                    name="gender"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl> */}
            <ProfileType formValues={formValues} onChange={onChange} />
        </>
    );
};

export default Third;
