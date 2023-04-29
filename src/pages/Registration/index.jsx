import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Registration = () => {
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
        <div className="page-registration">
            <h2>Фриланс</h2>
            <div className="page-registration__inputs">
                <TextField onChange={handleChangeLogin} value={login} label="Логин" variant="filled" fullWidth />
                <TextField onChange={handleChangePassword} value={password} label="Пароль" variant="filled" fullWidth />
            </div>

            {/* todo: сделать стэппер, для добавления личной информации [2] */}
            <Button onClick={handleReset} variant="outlined" fullWidth>
                Сбросить
            </Button>
            <Button onClick={handleSubmit} variant="contained" fullWidth>
                Регистрация
            </Button>
        </div>
    );
};

export default Registration;
