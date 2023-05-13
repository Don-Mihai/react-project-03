import './Hero.scss';
import logos from './utils/logos';
import bemCreator from '../bemCreator';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cn = bemCreator('page-hero');

const Hero = () => {
    return (
        <>
            <section className={cn()}>
                <div className={cn('container')}>
                    <div className={cn('text-container')}>
                        <h1 className={cn('text')}>
                            <span>Лучшие фрилансеры </span>
                            для ваших задач
                        </h1>
                        <Button component={Link} to="" variant="contained" fullWidth>
                            Разместить задание
                        </Button>
                    </div>
                </div>
                <div className={cn('trusted')}>
                    <div className={cn('trusted-text')}> Нам доверяют:</div>
                    <div className={cn('trusted-logo')}>
                        {logos.map(logo => (
                            <img className={cn('logo')} key={logo.id} src={logo.src} alt={logo.alt} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
