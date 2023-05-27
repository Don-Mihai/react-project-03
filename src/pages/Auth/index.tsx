import { useCallback, useMemo, useState } from 'react';
import './Auth.scss';
import TextField from '@mui/material/TextField';
import bemCreator from '../../components/bemCreator';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Freelancer } from '../../App';
import { validateErrors, validateLogin, validatePassword } from '../../utils';
import Button from '../../components/Button';
import { INPUTS_NAME } from '../../types';
import { INITIAL_STATE } from './utils';

const cn = bemCreator('page-auth');

const Auth = () => {
    const [formValues, setFormValues] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState(INITIAL_STATE);

    const navigate = useNavigate();

    const handleChange = (event: any) => {
        const { name, value } = event?.target;

        let errorMessage = '';

        if (name === INPUTS_NAME.LOGIN) {
            errorMessage = validateLogin(value);
        }

        if (name === INPUTS_NAME.PASSWORD) {
            errorMessage = validatePassword(value);
        }

        setFormErrors({
            ...formErrors,
            [name]: errorMessage,
        });

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const isValid = validateErrors(formErrors);

        if (!isValid) return;

        axios.get('https://645f57d47da4477ba9554f96.mockapi.io/frelancers').then(res => {
            const user: Freelancer = res.data.filter((user: Freelancer) => {
                if (user.login === formValues.login && user.password === formValues.password) {
                    return true;
                } else return false;
            })[0];

            if (user?.id) {
                localStorage.setItem('userId', String(user.id));
                navigate('/profile');
            }
        });
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="page-auth">
            <div className={cn('wrapper')}>
                <h2>Авторизация</h2>
                <div className={cn('inputs')}>
                    <TextField
                        onChange={handleChange}
                        value={formValues.login}
                        name="login"
                        helperText={formErrors.login}
                        error={!!formErrors.login}
                        label="Логин"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        onChange={handleChange}
                        value={formValues.password}
                        name="password"
                        helperText={formErrors.password}
                        error={!!formErrors.password}
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                    />
                </div>

                {/* todo: сделать стэппер, для добавления личной информации [2] */}
                <div className={cn('Button')}>
                    <Button onClick={handleSubmit}>Войти</Button>
                    <Button onClick={handleRegister} variant="outlined">
                        Нет аккаунта? Зарегистрируйся
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
