import './Hero.scss';
import bemCreator from '../bemCreator';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cn = bemCreator('page-hero');

function Hero() {
    const [backgroundImage, setBackgroundImage] = useState('');

    function handleResize() {
        if (window.innerWidth <= 767) {
            setBackgroundImage('none');
        } else {
            setBackgroundImage('./images/hero.png');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const logos = [
        { id: 1, src: './images/trusted/1.png', alt: 'logo 1' },
        { id: 2, src: './images/trusted/2.png', alt: 'logo 2' },
        { id: 3, src: './images/trusted/3.png', alt: 'logo 3' },
        { id: 4, src: './images/trusted/4.png', alt: 'logo 4' },
        { id: 5, src: './images/trusted/5.png', alt: 'logo 5' },
    ];

    return (
        <>
            <section className={cn()}>
                <div className={cn('container')} style={{ backgroundImage: `url(${backgroundImage})` }}>
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
}

export default Hero;
