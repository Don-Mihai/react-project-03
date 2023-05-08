import React from 'react';
import bemCreator from '../../components/bemCreator';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Home.scss';
import { Freelancer } from '../../App';
import Grid from '@mui/material/Grid';
import Hero from '../../components/Hero';

const cn = bemCreator('homeSection');

export interface Props {
    sectionTitle: string;
    bottonText: string;
    freelancers: Freelancer[];
}

const Home = ({ sectionTitle, bottonText, freelancers }: Props) => {
    return (
        <>
            <Hero />
            <section className={cn()}>
                <div className={cn('title-contaner')}>
                    <h2 className={cn('title')}>{sectionTitle}</h2>
                    <Button component={Link} to="" variant="outlined">
                        {bottonText}
                    </Button>
                </div>

                <Grid container spacing={2} className={cn('cards')}>
                    {freelancers.map(card => (
                        <Grid key={card.id} item xs={12} sm={6} md={4}>
                            <Card className={cn('card')}>
                                <div className={cn('row')}>
                                    <img src={card.image} alt="" />
                                    <div className={cn('text')}>
                                        <h3 className={cn('card-title')}>{card.name}</h3>
                                        <p className={cn('status')}>{card.status}</p>
                                    </div>
                                </div>{' '}
                                <Stack direction="row" justifyContent="flex-start" flexWrap="wrap" spacing={2} className={cn('skills')}>
                                    {card.skills.map((skill, index) => (
                                        <Chip key={index} label={skill} size="small" className={cn('skill')} />
                                    ))}
                                </Stack>
                                <CardActions className={cn('button-contaner')}>
                                    <div className={cn('text')}>
                                        <span className={cn('text')}>{card.ratePerHour} ₽ / час</span>
                                    </div>
                                    <span className={cn('rating')}>Рейтинг: {card.rating}%</span>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    );
};

export default Home;
