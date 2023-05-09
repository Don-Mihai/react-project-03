import './Drawer.scss';
import bemCreator from '../bemCreator';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cn = bemCreator('drawer');

const Drawer = ({ onClose }) => {
    return (
        <div className="overlay">
            <div className={cn()}>
                <img className={cn('close')} onClick={onClose} src="/images/btn-remove.svg" alt="Close" />
                <div className={cn('wrap')}>
                    <h2 className={cn('title')}>Добро пожаловать на REACT-FREELANCE</h2>
                    <p className={cn('subtitle')}>Работайте без рисков, сэкономив время и деньги</p>

                    <div className={cn('buttons')}>
                        <Button component={Link} to="/auth" variant="outlined" fullWidth>
                            Вход
                        </Button>
                        <Button component={Link} to="/registration" variant="contained" fullWidth>
                            Регистрация
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
