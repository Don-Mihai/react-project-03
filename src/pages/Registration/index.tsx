import { useState } from 'react';
import './Registration.scss';
import Button from '@mui/material/Button';
import Primary from './Primary';
import Third from './Third';
import Secondary from './Secondary';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

export enum INPUTS_NAME {
    LOGIN = 'login',
}

export interface Props {
    formValues: FormValues;
    onChange: (event: any, newValue?: any) => void;
}

const cn = bemCreator('page-registration');

const Registration = ({}) => {
    const [formValues, setFormValues] = useState<FormValues>({
        [INPUTS_NAME.LOGIN]: '',
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

    const handleReset = () => {
        switch (step) {
            case 1:
                setFormValues({
                    ...formValues,
                    [INPUTS_NAME.LOGIN]: '',
                    password: '',
                });
                break;

            case 2:
                setFormValues({
                    ...formValues,
                    name: '',
                    surname: '',
                    user: '',
                    status: '',
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
        const payload: FormValues = {
            ...formValues,
        };

        console.log(payload);

        if (formValues[INPUTS_NAME.LOGIN]) {
            navigate('/main');
        }
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

                {/* todo: сделать стэппер, для добавления личной информации [2] */}

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
