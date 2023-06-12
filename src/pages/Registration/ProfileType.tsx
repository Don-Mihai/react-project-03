import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Props } from '.';
import { ROLES } from '../../redux/user/types';
import { INPUTS_NAME } from '../../types';

const ProfileType = ({ onChange, formValues }: Props) => {
    const status = [
        { label: 'Front-end developer' },
        { label: 'Back-end developer' },
        { label: 'Full-stack developer' },
        { label: 'Designer' },
        { label: 'Copywriter' },
        { label: 'QA Engineer' },
    ].map(item => ({ ...item, name: 'status' }));

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
            <FormControl sx={{ minWidth: 130 }} style={{ flex: '1 0 auto' }} required>
                <InputLabel id="demo-simple-select-label">Profile Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formValues.role}
                    onChange={onChange}
                    label="Profile Type"
                    name={INPUTS_NAME.ROLE}
                >
                    <MenuItem value={ROLES.CUSTOMER}>Client</MenuItem>
                    <MenuItem value={ROLES.FREELANCER}>Freelancer</MenuItem>
                </Select>
            </FormControl>

            <Autocomplete
                // @ts-ignore
                value={formValues.role === ROLES.FREELANCER ? formValues.status : (formValues.status = '')}
                onChange={onChange}
                disablePortal
                id="combo-box-demo"
                options={status}
                sx={{ minWidth: 200 }}
                style={{ flex: '1 0 auto', opacity: formValues.role !== ROLES.FREELANCER ? 0 : 1 }}
                // @ts-ignore
                isOptionEqualToValue={option => option.label}
                disabled={formValues.role !== ROLES.FREELANCER}
                renderInput={params => (
                    <TextField
                        {...params}
                        label={formValues.role === ROLES.FREELANCER ? 'Choose your status' : ''}
                        variant={formValues.role === ROLES.FREELANCER ? 'outlined' : 'filled'}
                        required={formValues.role === ROLES.FREELANCER}
                    />
                )}
            />
        </div>
    );
};

export default ProfileType;
