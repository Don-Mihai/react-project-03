import { useState } from 'react';
import './Auth.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';

const cn = bemCreator('page-auth');

const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = event => {
        setLogin(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleReset = () => {
        setLogin('');
        setPassword('');
    };

    const handleSubmit = () => {
        const payload = {
            login,
            password,
        };

        console.log(payload);
    };

    return (
        <div className="page-auth">
            <div className={cn('top-wrapper')}>
                Ещё нет аккаунта? <Link to={'/registration'}>Зарегистрируйтесь</Link>
            </div>

            <div className={cn('wrapper')}>
                <h2>Фриланс Авторизация</h2>
                <div className="page-auth__inputs">
                    <TextField onChange={handleChangeLogin} value={login} label="Логин" variant="filled" fullWidth />
                    <TextField onChange={handleChangePassword} value={password} label="Пароль" variant="filled" fullWidth />
                </div>

                {/* todo: сделать стэппер, для добавления личной информации [2] */}
                <Button onClick={handleReset} variant="outlined" fullWidth>
                    Сбросить
                </Button>
                <Button onClick={handleSubmit} variant="contained" fullWidth>
                    Авторизация
                </Button>
            </div>
        </div>
    );
};

export default Auth;
