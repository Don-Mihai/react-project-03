import { useState } from 'react';
import './CreateOrder.scss';
import bemCreator from '../../components/bemCreator';
import { Button, TextField } from '@mui/material';
import { selectCurrentUser } from '../../redux/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PProject, PROJECT_STATUS } from '../../redux/project/types';
import { create } from '../../redux/project';

const cn = bemCreator('page-create-order');

//наследуем интерфейс заказа
interface FormValues extends PProject {}

const CreateOrder = () => {
    const dispatch = useAppDispatch();

    //получим id текущего пользователя
    const { id } = useAppSelector(selectCurrentUser);
    //присвоем его employerId
    const initialState = {
        employerId: id,
        title: '',
        description: '',
        status: PROJECT_STATUS.ACTIVE,
    };
    const [project, setProject] = useState<FormValues>(initialState as FormValues);

    const handleChange = (event: any) => {
        const key = event.target?.name;

        setProject({
            ...project,
            [key]: event.target.value,
        });
    };

    const createProject = () => {
        try {
            dispatch(create(project));
            setProject(initialState as FormValues);
        } catch (error) {
            console.error('Ошибка при создании проекта');
        }
    };

    //Изменить верстку, когда пользователь не авторизовался
    if (!id) {
        return <>Сначала войдите в аккаунт, в качестве заказчика</>;
    }

    return (
        <div className={cn()}>
            <div className={cn('wrap')}>
                <TextField onChange={handleChange} name="title" value={project.title} label={'Название проекта'} fullWidth></TextField>
                <TextField onChange={handleChange} name="description" value={project.description} label={'Описание проекта'} fullWidth></TextField>
                <Button variant="contained" onClick={createProject}>
                    Опубликовать проект
                </Button>
            </div>
        </div>
    );
};

export default CreateOrder;
