import { useEffect, useMemo, useState } from 'react';
import './Profile.scss';
import bemCreator from '../../components/bemCreator';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { User } from '../../redux/user/types';
import { fetchUser } from '../../redux/user';

const cn = bemCreator('page-profile');

const Profile = () => {
    const [formValues, setFormValues] = useState({ login: '', name: '' });
    const [editMode, setEditMode] = useState(false);

    const dispatch = useAppDispatch();

    const fetchData = async () => {
        dispatch(fetchUser(Number(localStorage.getItem('userId')))).then(data => {
            const user = data.payload;
            setFormValues({ login: user?.login, name: user?.name });
        });
    };

    useEffect(() => {
        fetchData();
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
        setEditMode(prev => !prev);
    };

    const avatarStyles = useMemo(
        () => ({
            width: 100,
            height: 100,
        }),
        []
    );

    return (
        <div className={cn()}>
            <div className={cn('top')}>
                <Avatar alt="User" sx={avatarStyles} />
            </div>

            <div className={cn('content')}>
                {/* todo: добавить остальные данные пользователя для отображения в личном кабинете [Оксана] */}
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="name" label="Имя" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="surname" label="surname" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="email" label="email" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="ratePerHour" label="Оплата" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="rating" label="Рейтинг" fullWidth />
            </div>
            <Button onClick={handleEdit}>Редактировать</Button>
        </div>
    );
};

export default Profile;
