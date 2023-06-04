import { useEffect, useState } from 'react';
import './Profile.scss';
import bemCreator from '../../components/bemCreator';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';

const cn = bemCreator('page-profile');

const Profile = () => {
    const [formValues, setFormValues] = useState({ login: '', name: '' });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get(`https://645f57d47da4477ba9554f96.mockapi.io/frelancers/${localStorage.getItem('userId')}`).then(res => {
            setFormValues(res.data);
        });
    }, []);

    const handleChange = (event: any) => {
        const key = event.target?.name;

        setFormValues({
            ...formValues,
            [key]: event.target.value,
        });
    };

    const onEnter = (event: any) => {
        if (event.code === 'Enter') {
            axios.put(`https://645f57d47da4477ba9554f96.mockapi.io/frelancers/${localStorage.getItem('userId')}`, formValues);
        }
    };

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    return (
        <div className={cn()}>
            <div className={cn('top')}>
                <Avatar alt="User" sx={{ width: 100, height: 100 }} />
            </div>

            <div className={cn('content')}>
                {/* todo: добавить остальные данные пользователя для отображения в личном кабинете [Оксана] */}
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="name" label="Имя" fullWidth />
            </div>
            <Button onClick={handleEdit}>Редактировать</Button>
        </div>
    );
};

export default Profile;
