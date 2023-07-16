import { useEffect, useMemo, useState } from 'react';
import './Profile.scss';
import bemCreator from '../../components/bemCreator';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { User } from '../../redux/user/types';
import { fetchUser } from '../../redux/user';
import FileDrop from '../../components/FileDrop';
import { BASE_URL } from '../../utils';

const cn = bemCreator('page-profile');
interface FormValues {
    name: string;
    skills: string[];
    surname: string;
    password: string;
    login: string;
    role: string;
    email: string;
    imageUrl?: string;
}

const Profile = () => {
    const [formValues, setFormValues] = useState<FormValues>({ login: '', name: '', surname: '', password: '', role: '', email: '', skills: [], imageUrl: '' });
    const [editMode, setEditMode] = useState(false);

    const currentUser = useAppSelector(store => store.user.currentUser);

    const dispatch = useAppDispatch();

    const fetchData = async () => {
        dispatch(fetchUser()).then(data => {
            const user = data.payload;
            setFormValues({
                login: user?.login,
                name: user?.name,
                surname: user?.surname,
                email: user?.email,
                password: user?.password,
                role: user?.role,
                skills: user?.skills,
                imageUrl: user?.imageUrl,
            });
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

    const handleSendFiles = (files: Blob) => {
        const formData = new FormData();
        formData.append('filedata', files as Blob);

        axios.post(BASE_URL + `/uploads?userId=${currentUser.id}`, formData).then(fetchData);
    };

    return (
        <div className={cn()}>
            <div className={cn('top')}>
                <FileDrop onSendFiles={handleSendFiles}>
                    <Avatar alt="User" sx={avatarStyles} src={BASE_URL + '/' + formValues?.imageUrl} />
                </FileDrop>

                <input type="file" />
            </div>

            <div className={cn('content')}>
                {/* todo: добавить остальные данные пользователя для отображения в личном кабинете [Оксана] */}
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.name} name="name" label="Имя" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.surname} name="surname" label="Фамилия" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.login} name="login" label="Логин" fullWidth />
                <TextField
                    disabled={!editMode}
                    onChange={handleChange}
                    onKeyUp={onEnter}
                    value={formValues.password}
                    name="password"
                    label="Пароль"
                    fullWidth
                />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.email} name="email" label="Имейл" fullWidth />
                <TextField disabled={!editMode} onChange={handleChange} onKeyUp={onEnter} value={formValues.role} name="role" label="Роль" fullWidth />
                <div>
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-required-label">Skills</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={''}
                            label="Skills *"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>React</em>
                            </MenuItem>
                            <MenuItem value={10}>Node.js</MenuItem>
                            <MenuItem value={20}>Scss</MenuItem>
                            <MenuItem value={30}>HTML</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>
            </div>
            <Button onClick={handleEdit}>Редактировать</Button>
        </div>
    );
};

export default Profile;
