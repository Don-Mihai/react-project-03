import { useState } from 'react';
import './CreateOrder.scss';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Button, TextField } from '@mui/material';

const cn = bemCreator('page-create-order');

interface FormValues {
    name: string;
}

const CreateOrder = () => {
    const [formValues, setFormValues] = useState<FormValues>({ name: '' });

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
        <div className={cn()}>
            <div className={cn('wrap')}>
                <TextField onChange={handleChange} name="name" value={formValues.name} label={'Название проекта'} fullWidth></TextField>
                <Button variant="contained" onClick={handleSubmit}>
                    Опубликовать проект
                </Button>
            </div>
        </div>
    );
};

export default CreateOrder;
