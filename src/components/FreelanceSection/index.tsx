import React from 'react';
import './FreelanceSection.scss';
import bemCreator from '../bemCreator';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const cn = bemCreator('freelance-section');

const FreelanceSection = ({}) => {
    return (
        <section className={cn()}>
            <div className={cn('title-contaner')}>
                <h2 className={cn('title')}>раздел фрилансеров</h2>
                <Button variant="outlined">Все фриланс-проекты</Button>
            </div>
            <div className={cn('order-container')}>
                <Card className={cn('order')}>
                    <h3 className={cn('order-title')}>Разработка интернет-магазина</h3>
                    <Stack direction="row" spacing={1}>
                        <Chip label="React" />
                        <Chip label="Js" />
                        <Chip label="CSS" />
                    </Stack>
                    <hr className={cn('line')} />
                    <CardActions className={cn('button-contaner')}>
                        <div>
                            Стоимость: <br />
                            10000р.
                        </div>
                        <Button className={cn('button')} variant="contained" size="small">
                            Подробнее
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    );
};

export default FreelanceSection;
