import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import bemCreator from '../../components/bemCreator';
import { fetchUser, selectCurrentUser } from '../../redux/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PProject, PROJECT_STATUS } from '../../redux/project/types';
import { create } from '../../redux/project';
import './CreateOrder.scss';

const cn = bemCreator('page-create-order');

//наследуем интерфейс заказа
interface FormValues extends PProject {}

const CreateOrder = () => {
    const dispatch = useAppDispatch();

    //получим id текущего пользователя
    const { id } = useAppSelector(selectCurrentUser);
    const [project, setProject] = useState<FormValues>({
        employerId: id,
        title: '',
        description: '',
        status: PROJECT_STATUS.ACTIVE,
        budget: 0,
    });

    const fetchCurrentUser = async () => {
        await dispatch(fetchUser(Number(localStorage.getItem('userId'))));
    };

    useEffect(() => {
        fetchCurrentUser();
        setProject({
            ...project,
            employerId: id,
        });
    }, []);

    // if (!id) {
    //     return <Navigate to="/" />;
    // }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setProject({
            ...project,
            [name]: value,
        });
    };

    const createProject = () => {
        try {
            dispatch(create(project));
            setProject({
                ...project,
                title: '',
                description: '',
            });
        } catch (error) {
            console.error('Ошибка при создании проекта', error);
        }
    };

    return (
        <div className={cn()}>
            <div className={cn('wrap')}>
                <TextField onChange={handleChange} name="title" value={project.title} label={'Название проекта'} fullWidth />
                <TextField onChange={handleChange} name="description" value={project.description} label={'Описание проекта'} fullWidth />
                <Button variant="contained" onClick={createProject}>
                    Опубликовать проект
                </Button>
            </div>
        </div>
    );
};

export default CreateOrder;
