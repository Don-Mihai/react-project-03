import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const ProfileType = ({ onChange, formValues }) => {
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
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={formValues.user} onChange={onChange} label="Profile Type" name="user">
                    <MenuItem value={'Client'}>Client</MenuItem>
                    <MenuItem value={'Freelancer'}>Freelancer</MenuItem>
                </Select>
            </FormControl>

            <Autocomplete
                value={formValues.user === 'Freelancer' ? formValues.status : (formValues.status = '')}
                onChange={onChange}
                disablePortal
                id="combo-box-demo"
                options={status}
                sx={{ minWidth: 200 }}
                style={{ flex: '1 0 auto' }}
                isOptionEqualToValue={option => option.label}
                disabled={formValues.user !== 'Freelancer'}
                renderInput={params => (
                    <TextField
                        {...params}
                        label={formValues.user === 'Freelancer' ? 'Choose your status' : ''}
                        variant={formValues.user === 'Freelancer' ? 'outlined' : 'filled'}
                        required={formValues.user === 'Freelancer'}
                    />
                )}
            />
        </div>
    );
};

export default ProfileType;
