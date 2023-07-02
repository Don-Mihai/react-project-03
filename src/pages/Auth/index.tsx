import { useState } from 'react';
import './Auth.scss';
import TextField from '@mui/material/TextField';
import bemCreator from '../../components/bemCreator';
import { Link, useNavigate } from 'react-router-dom';
import { validateErrors, validateLogin, validatePassword } from '../../utils';
import Button from '../../components/Button';
import { INPUTS_NAME } from '../../types';
import { INITIAL_STATE } from './utils';
import { useAppDispatch } from '../../redux/hooks';
import { authUsers } from '../../redux/user';
import { PAuth } from '../../redux/user/types';

const cn = bemCreator('page-auth');

const Auth = () => {
    const [formValues, setFormValues] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState(INITIAL_STATE);

    const dispatch = useAppDispatch();

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

    const handleSubmit = async () => {
        const isValid = validateErrors(formErrors);

        if (!isValid) return;

        const payload: PAuth = {
            login: formValues.login,
            password: formValues.password,
        };

        const data = await dispatch(authUsers(payload));

        console.log(data);
        // @ts-ignore
        if (data?.payload?.id) {
            navigate('/profile');
        } else {
            console.log('Неправильный логин или пароль');
        }
    };

    const handleRegister = () => {
        navigate('/registration');
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
