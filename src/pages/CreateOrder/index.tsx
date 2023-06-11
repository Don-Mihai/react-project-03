import { useState } from 'react';
import './CreateOrder.scss';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Button, TextField } from '@mui/material';

const cn = bemCreator('page-create-order');

interface FormValues {
    projectName: string;
    projectDescription: string;
    price: string;
}

const CreateOrder = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        projectName: '',
        projectDescription: '',
        price: '',
    });

    const handleChange = (event: any) => {
        const key = event.target?.name;

        setFormValues({
            ...formValues,
            [key]: event.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(formValues);
    };

    return (
        <div className={cn('wrap')}>
            <div className="h1">
                <h1>Раздел заказчиков</h1>
            </div>
            <div className="h3">
                <h3>Создать фриланс проект</h3>
            </div>

            <div className="nameproject">
                {' '}
                <TextField onChange={handleChange} name="projectName" value={formValues.projectName} label={'Название проекта'} fullWidth />
            </div>
            <div className="projectoverview">
                <TextField onChange={handleChange} name="projectDescription" value={formValues.projectDescription} label={'Описание проекта'} fullWidth />
            </div>
            <div className="price">
                <TextField onChange={handleChange} name="price" value={formValues.price} label={'Прайс услуги'} fullWidth />
            </div>

            <div className="butto">
                <Button variant="contained" onClick={handleSubmit} className={cn('publish-button')}>
                    Опубликовать проект
                </Button>
            </div>
        </div>
    );
};

export default CreateOrder;
