import { useState } from 'react';
import './Auth.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bemCreator from '../../components/bemCreator';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Freelancer } from '../../App';

const cn = bemCreator('page-auth');

const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleChangeLogin = (event: any) => {
        setLogin(event.target.value);
    };

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        const payload = {
            login,
            password,
        };

        axios.get('https://645f57d47da4477ba9554f96.mockapi.io/frelancers').then(res => {
            const user: Freelancer = res.data.filter((user: Freelancer) => {
                if (user.login === login && user.password === password) {
                    return true;
                } else return false;
            })[0];

            if (user?.id) {
                localStorage.setItem('userId', String(user.id));
                navigate('/profile');
            }
        });
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
                    <Button sx={{ width: '107px' }} onClick={handleSubmit} variant="contained">
                        Войти
                    </Button>
                    <Button onClick={handleSubmit} variant="outlined">
                        Нет аккаунта? Зарегистрируйся
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
