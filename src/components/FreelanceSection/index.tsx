import React from 'react';
import './FreelanceSection.scss';
import bemCreator from '../bemCreator';

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '../../redux/hooks';

const cn = bemCreator('freelance-section');

export interface Orders {
    id: number;
    name: string;
    skills: string[];
    price: number;
}

export const orders = [
    { id: 1, name: 'Разработка интернет-магазина', skills: ['React', 'Js', 'CSS'], price: 10000 },
    { id: 2, name: 'Дизайн для мобильного приложения', skills: ['Fimga', 'AdobePhotoShop', 'CSS'], price: 11000 },
    { id: 3, name: 'Обучение нейросети', skills: ['Python', 'DataScience', 'SQL', 'Apache'], price: 12000 },
    { id: 4, name: 'Разработка мобильного приложения', skills: ['ReactNative', 'Typescript', '.Net'], price: 13000 },
];

const FreelanceSection = ({ text }: any) => {
    const value = useAppSelector(state => state.counter.value);
    return (
        <section className={cn()}>
            <div className={cn('title-contaner')}>
                <h2 className={cn('title')}>Раздел фрилансеров {text}</h2>
                <Button className={cn('title-button')} variant="outlined">
                    Все фриланс-проекты
                </Button>
                {value}
            </div>
            <div className={cn('order-container')}>
                {orders.map(order => {
                    return (
                        <Card key={order.id} className={cn('order')}>
                            <h3 className={cn('order-title')}>{order.name}</h3>
                            <Stack direction="row" spacing={1}>
                                {order.skills.map((skill, index) => {
                                    return <Chip className={cn('chip')} key={index} label={skill} />;
                                })}
                            </Stack>
                            <hr className={cn('line')} />
                            <CardActions className={cn('button-contaner')}>
                                <div className={cn('price-text')}>
                                    Стоимость: <br />
                                    {order.price}р.
                                </div>
                                <Button className={cn('button')} variant="contained" size="small">
                                    Подробнее
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default FreelanceSection;
