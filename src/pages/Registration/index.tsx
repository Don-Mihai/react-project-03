import { useEffect, useRef, useState } from 'react';
import './Registration.scss';
import Button from '@mui/material/Button';
import Primary, { IPrimaryRef } from './Primary';
import Third from './Third';
import Secondary from './Secondary';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { INPUTS_NAME } from '../../types';
import { useAppDispatch } from '../../redux/hooks';
import { registerUser } from '../../redux/user';
import { PRegister, ROLES } from '../../redux/user/types';
import LinkButton from '../../components/LinkButton';
import { authUsers } from '../../redux/user';
import { PAuth } from '../../redux/user/types';
import { GoogleButton } from '../../features/AuthByGoogle';

export interface FormValues extends Partial<PRegister> {
    [INPUTS_NAME.PASSWORD_REPEAT]: string;
    [INPUTS_NAME.STATUS]?: string;
}

export interface Props {
    formValues: FormValues;
    onChange: (event: any, newValue?: any) => void;
}

const cn = bemCreator('page-registration');

const initialValues: FormValues = {
    [INPUTS_NAME.LOGIN]: '',
    [INPUTS_NAME.PASSWORD]: '',
    [INPUTS_NAME.PASSWORD_REPEAT]: '',
    [INPUTS_NAME.NAME]: '',
    [INPUTS_NAME.SURNAME]: '',
};

const Registration = ({}) => {
    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [step, setStep] = useState<number>(1);

    const ref = useRef<IPrimaryRef | null>(null);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleChange = (event: any, newValue: any) => {
        const key = event.target?.name || newValue?.name;

        setFormValues({
            ...formValues,
            [key]: newValue?.label || event.target.value,
        });
    };

    const handleSubmit = async () => {
        const payload: PRegister = {
            login: formValues[INPUTS_NAME.LOGIN],
            password: formValues[INPUTS_NAME.PASSWORD],
            name: formValues[INPUTS_NAME.NAME],
            surname: formValues[INPUTS_NAME.SURNAME],
            role: formValues[INPUTS_NAME.ROLE],
        } as PRegister;

        // todo: при регистрации пользователя добавлять айди в локалСторадже и обновлять данные в currentUser в redux [2]
        await dispatch(registerUser(payload));

        navigate('/');
    };

    const handleNextStep = () => {
        setStep(step + 1);
        ref?.current?.validation();
    };

    return (
        <div className={cn()}>
            <div className={cn('wrapper')}>
                <h2>Регистрация</h2>
                <div className={cn('inputs')}>
                    {step === 1 ? <Primary ref={ref} onChange={handleChange} formValues={formValues} /> : ''}
                    {step === 2 ? <Secondary onChange={handleChange} formValues={formValues} /> : ''}
                    {step === 3 ? <Third onChange={handleChange} formValues={formValues} /> : ''}
                </div>

                <div className={cn('button_two')}>
                    {step === 3 ? (
                        <Button onClick={handleSubmit} variant="contained" fullWidth>
                            Зарегистрироваться
                        </Button>
                    ) : (
                        <Button onClick={handleNextStep} variant="contained">
                            Далее
                        </Button>
                    )}

                    <LinkButton buttonText="У меня уже есть аккаунт" linkTo="/auth" />
                </div>
                <GoogleButton />
            </div>
        </div>
    );
};

export default Registration;
