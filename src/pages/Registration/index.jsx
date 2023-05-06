import { useEffect, useState } from 'react';
import './Registration.scss';
import Button from '@mui/material/Button';
import Primary from './Primary';
import Third from './Third';
import Secondary from './Secondary';
// import axios from './axios';

const Registration = ({}) => {
    const [formValues, setFormValues] = useState({
        login: '',
        password: '',
        name: '',
        surname: '',
        gender: '',
    });
    const [step, setStep] = useState(1);

    const handleChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleReset = () => {
        switch (step) {
            case 1:
                setFormValues({
                    ...formValues,
                    login: '',
                    password: '',
                });
                break;

            case 2:
                setFormValues({
                    ...formValues,
                    name: '',
                    surname: '',
                });
                break;

            case 3:
                setFormValues({
                    ...formValues,
                    gender: '',
                });
                break;

            default:
                break;
        }
    };

    const handleSubmit = () => {
        console.log(formValues);
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className="page-registration">
            <h2>Фриланс</h2>
            <div className="page-registration__inputs">
                {step === 1 ? <Primary onChange={handleChange} formValues={formValues} /> : ''}
                {step === 2 ? <Secondary onChange={handleChange} formValues={formValues} /> : ''}
                {step === 3 ? <Third onChange={handleChange} formValues={formValues} /> : ''}
            </div>

            {/* todo: сделать стэппер, для добавления личной информации [2] */}
            <Button onClick={handleReset} variant="outlined" fullWidth>
                Сбросить
            </Button>

            {step === 3 ? (
                <Button onClick={handleSubmit} variant="contained" fullWidth>
                    Регистрация
                </Button>
            ) : (
                <Button onClick={handleNextStep} variant="contained" fullWidth>
                    Далее
                </Button>
            )}
        </div>
    );
};

export default Registration;
