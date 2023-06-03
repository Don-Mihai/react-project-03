import { useEffect, useState } from 'react';
import './Registration.scss';
import Button from '@mui/material/Button';
import Primary from './Primary';
import Third from './Third';
import Secondary from './Secondary';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { INPUTS_NAME } from '../../types';
import { useAppDispatch } from '../../redux/hooks';
import { registerCustumer } from '../../redux/customer';
import { PRegister } from '../../redux/customer/types';

export interface FormValues {
    [INPUTS_NAME.LOGIN]: string;
    password: string;
    name: string;
    surname: string;
    gender: string;
    user: string;
    status: string;
    skill: string;
    passwordRepeat: string;
}

export interface Props {
    formValues: FormValues;
    onChange: (event: any, newValue?: any) => void;
}

const cn = bemCreator('page-registration');

const Registration = ({}) => {
    const [formValues, setFormValues] = useState<FormValues>({
        [INPUTS_NAME.LOGIN]: '',
        // todo: по аналогии со строчкой выше, поменять названия ключей, взяв их из enum [Оксана]
        password: '',
        passwordRepeat: '',
        name: '',
        surname: '',
        gender: '',
        user: '',
        status: '',
        skill: '',
    });
    const [step, setStep] = useState<number>(1);
    const [skills, setSkills] = useState<string[]>([]);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleChange = (event: any, newValue: any) => {
        const key = event.target?.name || newValue?.name;

        setFormValues({
            ...formValues,
            [key]: newValue?.label || event.target.value,
        });
    };

    const onEnter = (event: any) => {
        if (event.code === 'Enter') {
            setSkills([...skills, formValues.skill]);
        }
    };

    const handleSubmit = () => {
        const payload: PRegister = {
            login: formValues[INPUTS_NAME.LOGIN],
            password: formValues.password,
            name: formValues.name,
        };

        dispatch(registerCustumer(payload)).then(() => {
            navigate('/');
        });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className={cn()}>
            <div className={cn('top-wrapper')}>
                Уже зарегистрированы? <Link to={'/auth'}>Войдите</Link>
            </div>

            <div className={cn('wrapper')}>
                <h2>Регистрация</h2>
                <div className={cn('inputs')}>
                    {step === 1 ? <Primary onEnter={onEnter} skills={skills} onChange={handleChange} formValues={formValues} /> : ''}
                    {/* {step === 2 ? <Secondary onChange={handleChange} formValues={formValues} /> : ''} */}
                    {/* {step === 3 ? <Third onChange={handleChange} formValues={formValues} /> : ''} */}
                </div>

                {/* <Button onClick={handleReset} variant="outlined" fullWidth>
                Зарегистрироваться
                </Button> */}
                {/* {step === 3 ? ( */}
                <div className={cn('button_two')}>
                    <Button onClick={handleSubmit} variant="contained" fullWidth>
                        Зарегистрироваться
                    </Button>
                    {/* ) : ( */}
                    <Button onClick={handleNextStep} variant="outlined" fullWidth>
                        У меня уже есть аккаунт
                    </Button>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default Registration;
