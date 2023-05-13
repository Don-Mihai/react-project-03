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
            <div className={cn('wrapper')}>
                <h2>Авторизация</h2>
                <div className={cn('inputs')}>
                    <TextField onChange={handleChangeLogin} value={login} label="Логин" variant="outlined" fullWidth />
                    <TextField onChange={handleChangePassword} value={password} label="Пароль" variant="outlined" fullWidth />
                </div>

                {/* todo: сделать стэппер, для добавления личной информации [2] */}
                <div className={cn('Button')}>
                    <Button sx={{ width: '107px' }} onClick={handleReset} variant="contained">
                        Войти
                    </Button>
                    <Button onClick={handleSubmit} variant="outlined" size="midi">
                        Нет аккаунта? Зарегистрируйся
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
